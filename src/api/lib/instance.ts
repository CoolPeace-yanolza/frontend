import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

import { getCookies, setCookies } from '@utils/lib/cookies';
import { postRefreshToken } from '..';
import { AxiosResponseError } from '@/types/axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': import.meta.env.VITE_CONTENT_TYPE
  }
});

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const accessToken = getCookies('accessToken');

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

const onErrorRequest = (error: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onErrorResponse = async (error: AxiosResponseError<string>) => {
  const { config, response } = error;

  // 액세스 토큰이 만료되었을 때
  if (response && response.status === 401) {
    if (error.response.data.code === 'JWT_EXPIRED_AUTHORIZATION') {
      const originalRequest = config;

      // 토큰 리프레시 요청
      const tokenResponse = await postRefreshToken();

      // 새로운 토큰 저장
      if (tokenResponse.status === 200) {
        const {
          access_token: newAccessToken,
          refresh_token: newRefreshToken,
          expires_in: expiresIn
        } = tokenResponse.data;
        setCookies('accessToken', newAccessToken, expiresIn);
        setCookies('refreshToken', newRefreshToken, expiresIn);

        // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return instance(originalRequest);

        // 리프레시 토큰도 만료되었을 때 = 재로그인 안내
      } else if (tokenResponse.status === 404) {
        console.log(tokenResponse.data.message);
        // await postLogout();
        // deleteAllCookies();
        // navigate('/login');

        return Promise.reject(error);
      }
    }
    console.log(error.response.data.code, error.response);
    return Promise.reject(error);
  }
  console.log('response error : ', error);
  return Promise.reject(error);
};

// 요청 인터셉터 추가
instance.interceptors.request.use(onRequest, onErrorRequest);

// TODO : 응답 인터셉터 추가
instance.interceptors.response.use(onResponse, onErrorResponse);

export default instance;
