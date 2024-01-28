import { instance } from '..';
import { PostRegisterCouponProps } from '@/types/register';

const postRegisterCoupon = async ({
  registerInfo
}: PostRegisterCouponProps) => {
  return await instance.post('/v1/coupons/register', registerInfo);
};

export default postRegisterCoupon;
