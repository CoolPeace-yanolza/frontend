import { AxiosError } from 'axios';

import { instance } from '..';
import { SignUpData } from '@/types/signUp';

const postSignUp = async (signUpData: SignUpData) => {
  try {
    const response = await instance.post('/v1/member/register', signUpData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default postSignUp;
