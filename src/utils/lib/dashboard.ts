import statusImage01 from '/images/ic-dailyReport-status01.png';
import statusImage02 from '/images/ic-dailyReport-status02.png';
import statusImage03 from '/images/ic-dailyReport-status03.png';
import statusImage04 from '/images/ic-dailyReport-status04.png';

// CouponStatusSection : 이번달 똑똑 현황

export const getStatusToLocaleString = (dataKey: string, data: string) => {
  switch (dataKey) {
    case 'total_sales':
      return Number(data).toLocaleString() + '원';
    case 'used_count':
      return Number(data).toLocaleString() + '개';
    case 'settlement_amount':
      return Number(data).toLocaleString() + '원';
    default:
      throw new Error();
  }
};

export const getMatchedStatusItemTitle = (data: string) => {
  switch (data) {
    case 'total_sales':
      return '쿠폰 사용 총 매출';
    case 'used_count':
      return '쿠폰 적용 예약 건수';
    case 'settlement_amount':
      return '쿠폰 정산 금액';
    default:
      throw new Error();
  }
};

// DailyReport : 우리 숙소 일간 리포트

export const getMatchedImage = (condition: number) => {
  switch (condition) {
    case 1:
      return statusImage01;
    case 2:
      return statusImage02;
    case 3:
      return statusImage03;
    case 4:
      return statusImage04;
    default:
      throw new Error();
  }
};
