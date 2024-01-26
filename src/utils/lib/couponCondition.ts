export const couponCondition = (conditionDays: string): string => {
  if (conditionDays.length === 1) {
    return `${conditionDays}요일`;
  } else if (conditionDays === '평일') {
    return '일~목';
  } else if (conditionDays === '주말') {
    return '금~토';
  }
  return conditionDays;
};

export default couponCondition;
