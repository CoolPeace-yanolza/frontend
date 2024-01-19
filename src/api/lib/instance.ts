import axios from 'axios';

import { getCookies, setCookies } from '@utils/lib/cookies';
import { postRefreshToken } from '..';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': import.meta.env.VITE_CONTENT_TYPE
  }
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  config => {
    const accessToken = getCookies('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// TODO : 응답 인터셉터 추가
instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const {
      config,
      response: { status }
    } = error;

    // 액세스 토큰이 만료되었을 때
    if (status === 401) {
      if (error.response.data.code === 'JWT_EXPIRED_AUTHORIZATION') {
        const originalRequest = config;

        // 토큰 리프레시 요청
        const response = await postRefreshToken();

        // 새로운 토큰 저장
        if (response.status === 200) {
          const {
            access_token: newAccessToken,
            refresh_token: newRefreshToken,
            expires_in: expiresIn
          } = response.data;
          setCookies('accessToken', newAccessToken, expiresIn);
          setCookies('refreshToken', newRefreshToken, expiresIn);

          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axios(originalRequest);

          // 리프레시 토큰도 만료되었을 때 = 재로그인 안내
        } else if (response.status === 404) {
          console.log(response.data.message);
          alert('다시 로그인해주십시오.');
          window.location.replace('/login');
        }
      }
      console.log(error.response.data.code, error.response);
      alert('서비스 이용에 불편을 드려 죄송합니다.');
      window.location.replace('/login');
    }
    console.log('response error : ', error);
    return Promise.reject(error);
  }
);

export default instance;
