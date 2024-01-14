import statusImage01 from '/images/ic-dailyReport-status01.png';
import statusImage02 from '/images/ic-dailyReport-status02.png';
import statusImage03 from '/images/ic-dailyReport-status03.png';
import statusImage04 from '/images/ic-dailyReport-status04.png';

// CouponStatusSection : 이번달 똑똑 현황

export const getStatusToLocaleString = (data: string) => {
  return Number(data).toLocaleString();
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
  }
};
