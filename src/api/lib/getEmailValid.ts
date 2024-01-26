import { AxiosError } from 'axios';

import { instance } from '..';

const getEmailValid = async (email: string) => {
  try {
    const response = await instance.get(
      `/v1/member/register/check/email?email=${email}`
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default getEmailValid;
