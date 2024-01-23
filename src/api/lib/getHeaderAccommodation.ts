import { AxiosResponse } from 'axios';

import { instance } from '..';
import {
  HeaderAccommodationData,
  HeaderAccommodationResult
} from '@/types/layout';

const getHeaderAccommodation = async (): Promise<HeaderAccommodationData> => {
  const response: AxiosResponse<HeaderAccommodationResult, Error> =
    await instance.get(`/v1/accommodation`);

  return response.data.accommodation_responses;
};

export default getHeaderAccommodation;
