import { LoginData } from '@/types/auth';
import { instance } from '..';
import { AxiosError } from 'axios';

const postLogin = async (loginData: LoginData) => {
  try {
    const response = await instance.post('/v1/member/login', loginData);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

export default postLogin;
