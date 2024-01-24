import { AxiosError } from 'axios';

import { LoginData } from '@/types/auth';
import { instance } from '..';

const postLogin = async (loginData: LoginData) => {
  try {
    const response = await instance.post('/v1/member/login', loginData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default postLogin;
