import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { postRegisterCoupon } from 'src/api';
import { registerInputState } from '@recoil/index';
import { PostRegisterCouponProps } from '@/types/register';

export const usePostRegisterCoupon = () => {
  const setInput = useSetRecoilState(registerInputState);

  return useMutation<
    AxiosResponse<ResponseType>,
    Error,
    PostRegisterCouponProps
  >({
    mutationFn: ({ registerInfo }: PostRegisterCouponProps) =>
      postRegisterCoupon({ registerInfo }),
    onSuccess: () => {
      setInput(prev => ({ ...prev, isModalOpen: true }));
    }
  });
};
