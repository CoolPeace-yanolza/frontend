export interface ToggleStyleProps {
  $isToggle: boolean;
}

export interface ResisterDateStyleProps {
  $resisterDateClick: boolean;
}

export interface CategoryTabStyleProps {
  $categoryTab: boolean;
}

// api 쿠폰 리스트정보 응답 데이터
export interface CouponListResponse {
  content: CouponInformationResponse[];
  category: {
    all: number;
    exposure_on: number;
    exposure_off: number;
    expiration: number;
  };
  total_pages: number;
  total_elements: number;
  size: number;
  number: number;
  number_of_elements: number;
  empty: boolean;
  first: boolean;
  last: boolean;
}

export interface CouponInformationResponse {
  title: string;
  coupon_number: string;
  coupon_status: string;
  coupon_promotion: boolean;
  coupon_concat_title: string;
  discount_type: string;
  discount_value: number;
  discount_flat_rate: number | null;
  maximum_discount_price: number | null;
  customer_type: string;
  coupon_room_types: string[];
  coupon_room_stay_more: boolean;
  minimum_reservation_price: number;
  coupon_use_condition_days: string;
  exposure_start_date: string;
  exposure_end_date: string;
  coupon_expiration: number;
  download_count: number;
  use_count: number;
  accommodation_id: number;
  register_room_numbers: string[];
  created_date: string;
}

// 쿠폰 1개에 대한 타입
export interface CouponListProps {
  couponInfo: CouponInformationResponse;
}

// 쿠폰 수정
export interface CouponUpdateCredential {
  coupon_number: string | undefined;
  accommodation_id: number;
  customer_type: string;
  discount_type: string;
  discount_value: number;
  discount_flat_rate: number | null;
  maximum_discount_price: number | null;
  coupon_room_type: string;
  register_all_room: false;
  register_rooms: string[];
  minimum_reservation_price: number;
  coupon_use_condition_days: string[];
  exposure_start_date: string;
  exposure_end_date: string;
}

// 쿠폰 삭제
export interface CouponDeleteCredential {
  coupon_number: string | undefined;
}

// 토글 api  요청 타입
export interface CouponToggleCredential {
  coupon_number: string | undefined;
  coupon_status: string;
}

// HACK : 쿠폰 요청  타입
// export interface GetCouponListCredential {
//   accommodationId: number;
//   date?: string;
//   status?: string;
//   title?: string;
// }
