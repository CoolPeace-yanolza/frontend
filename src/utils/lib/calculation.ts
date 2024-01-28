export const getUpdatedDate = () => {
  const today = new Date();
  today.setMonth(today.getMonth() - 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const year = lastDayOfMonth.getFullYear().toString().slice(-2);
  const month = (lastDayOfMonth.getMonth() + 1).toString().padStart(2, '0');
  const day = lastDayOfMonth.getDate().toString();

  return `${year}.${month}.${day}`; // ex> 2023.12.31 (지난달 마지막 날 반환)
};

export const calculateCouponRate = (rate: number) => {
  if (rate % 10) {
    return Number((rate * 0.1).toFixed(1));
  } else {
    return Number((rate * 0.1).toFixed(0));
  }
};
