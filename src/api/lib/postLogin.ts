import { LoginData } from '@/types/auth';
import { instance } from '..';

const postLogin = async (loginData: LoginData) => {
  const response = await instance.post('/v1/member/login', loginData);
  return response.data;
};

export default postLogin;
