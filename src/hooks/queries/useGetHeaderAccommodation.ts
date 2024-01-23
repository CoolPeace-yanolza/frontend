import { useSuspenseQuery } from '@tanstack/react-query';

import { getHeaderAccommodation } from 'src/api';
import { HeaderAccommodationData } from '@/types/layout';

const useGetHeaderAccommodation = () =>
  useSuspenseQuery<HeaderAccommodationData, Error>({
    queryKey: ['Accommodation'],
    queryFn: () => getHeaderAccommodation()
  });

export default useGetHeaderAccommodation;
