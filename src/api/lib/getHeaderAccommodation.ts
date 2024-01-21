import { AxiosResponse } from 'axios';

import { instance } from '..';
import { HeaderAccommodationResult } from '@/types/layout';

const getHeaderAccommodation = async (): Promise<HeaderAccommodationResult> => {
  const response: AxiosResponse<HeaderAccommodationResult, Error> =
    await instance.get(`/v1/accommodation`);

  return response.data;
};

export default getHeaderAccommodation;
