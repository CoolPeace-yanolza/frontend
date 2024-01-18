import { getCookies } from '@utils/lib/cookies';
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': import.meta.env.VITE_CONTENT_TYPE
  }
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config: any): any => {
    const accessToken = getCookies('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

// TODO : 응답 인터셉터 추가
instance.interceptors.response.use((response: any): any => {
  return response;
});

export default instance;
