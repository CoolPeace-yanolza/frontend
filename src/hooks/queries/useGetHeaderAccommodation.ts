import { useSuspenseQuery } from '@tanstack/react-query';

import { getHeaderAccommodation } from 'src/api';
import { HeaderAccommodationResult } from '@/types/layout';

const useGetHeaderAccommodation = () =>
  useSuspenseQuery<HeaderAccommodationResult, Error>({
    queryKey: ['Accommodation'],
    queryFn: () => getHeaderAccommodation()
  });

export default useGetHeaderAccommodation;
