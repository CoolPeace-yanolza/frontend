import { AxiosError } from 'axios';

import { instance } from '..';

const getEmailAvailability = async (email: string) => {
  try {
    const response = await instance.get(
      `/v1/member/check/email?email=${email}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export default getEmailAvailability;
