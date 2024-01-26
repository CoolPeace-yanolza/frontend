export const couponCondition = (day: string, dayOfWeek: string): string => {
  if (day === '하루만') {
    return `${dayOfWeek}`;
  } else if (day === '평일') {
    return '일~목';
  } else if (day === '주말') {
    return '금~토';
  }
  return day;
};

export default couponCondition;
