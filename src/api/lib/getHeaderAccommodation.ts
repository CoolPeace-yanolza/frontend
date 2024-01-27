import { AxiosResponse } from 'axios';

import { instance } from '..';
import {
  HeaderAccommodationData,
  HeaderAccommodationResult
} from '@/types/layout';
import { useRecoilState } from 'recoil';
import { headerAccommodationState } from '@recoil/index';

const getHeaderAccommodation = async (): Promise<HeaderAccommodationData> => {
  const [, setHeaderAccommodation] = useRecoilState(headerAccommodationState);
  const response: AxiosResponse<HeaderAccommodationResult, Error> =
    await instance.get(`/v1/accommodation`);

  setHeaderAccommodation(response.data.accommodation_responses[0]);

  return response.data.accommodation_responses;
};

export default getHeaderAccommodation;
