import { getCouponList } from './../../api/lib/getCouponList';
import {
  CouponDeleteCredential,
  CouponListResponse,
  CouponToggleCredential,
  CouponUpdateCredential
} from '@/types/couponList';

import {
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from '@tanstack/react-query';

import {
  couponDeleteApi,
  couponToggleApi,
  couponUpdateApi
} from 'src/api/lib/getCouponList';

// 쿠폰 조회
export const useGetCouponList = (
  accommodationId: number,
  date?: string,
  status?: string,
  title?: string,
  page?: number
) =>
  useSuspenseQuery<CouponListResponse, Error>({
    queryKey: ['CouponList', accommodationId, status, date, title, page],
    queryFn: () => getCouponList(accommodationId, date, status, title, page)
  });

// 쿠폰 수정
export const useCouponUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, CouponUpdateCredential>({
    mutationFn: couponUpdateApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['CouponList'] });
    }
  });
};

// 쿠폰 삭제
export const useCouponDelete = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, CouponDeleteCredential>({
    mutationFn: couponDeleteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['CouponList'] });
    }
  });
};

// 토글
export const useToggleChange = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, CouponToggleCredential>({
    mutationFn: couponToggleApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['CouponList'] });
    }
  });
};
