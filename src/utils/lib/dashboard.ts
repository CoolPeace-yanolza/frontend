import statusImage01 from '/images/ic-dailyReport-status01.png';
import statusImage02 from '/images/ic-dailyReport-status02.png';
import statusImage03 from '/images/ic-dailyReport-status03.png';
import statusImage04 from '/images/ic-dailyReport-status04.png';

// DailyReport

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
