import { CouponConditionProps } from '@/types/couponList';

export const couponCondition = ({ day, dayOfWeek }: CouponConditionProps) => {
  if (day === '하루만') {
    return `${dayOfWeek}`;
  } else if (day === '평일') {
    return '일~목';
  } else if (day === '주말') {
    return '금~토';
  }
  return '전체';
};

export default couponCondition;
