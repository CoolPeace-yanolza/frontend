import { SettlementedItem } from '@/types/settlements';

export const convertKeysToKorean = (data: SettlementedItem) => {
  return {
    '쿠폰번호': data.coupon_number,
    '관리 쿠폰명': data.coupon_name,
    '사용건수': data.coupon_count,
    '쿠폰 할인 금액': data.discount_price,
    '쿠폰 취소 금액': data.cancel_price,
    '정산 금액': data.sum_price,
    '쿠폰 적용일': data.coupon_use_date,
    '정산 완료일': data.complete_at
  };
};