export const renderCouponText = (informationText: string) => {
  switch (informationText) {
    case 'coupon_total_sales':
      return '쿠폰 사용 총 매출';
    case 'coupon_use_sales':
      return '쿠폰 사용 총 횟수';
    case 'coupon_total_used_count':
      return '쿠폰 사용 금액';
    default:
      throw new Error();
  }
};

export const renderCouponAmount = (informationText: string[]) => {
  switch (informationText[0]) {
    case 'coupon_total_sales':
      return `${Number(informationText[1]).toLocaleString()} 원`;
    case 'coupon_use_sales':
      return `${Number(informationText[1]).toLocaleString()} 회`;
    case 'coupon_total_used_count':
      return `${Number(informationText[1]).toLocaleString()} 원`;
    default:
      throw new Error();
  }
};

export const renderTotalText = (informationText: string) => {
  switch (informationText) {
    case 'coupon_total_sales':
      return '누적 쿠폰 사용 총 매출';
    case 'coupon_use_sales':
      return '누적 쿠폰 사용 금액';
    case 'coupon_total_used_count':
      return '누적 쿠폰 사용 총 횟수';
    case 'coupon_total_download_count':
      return '누적 쿠폰 다운로드 수';
    default:
      throw new Error();
  }
};

export const renderTotalAmount = (informationText: [string, number]) => {
  switch (informationText[0]) {
    case 'coupon_total_sales':
      return `${informationText[1].toLocaleString()} 원`;
    case 'coupon_use_sales':
      return `${informationText[1].toLocaleString()} 원`;
    case 'coupon_total_used_count':
      return `${informationText[1].toLocaleString()} 회`;
    case 'coupon_total_download_count':
      return `${informationText[1].toLocaleString()} 개`;
    default:
      throw new Error();
  }
};
