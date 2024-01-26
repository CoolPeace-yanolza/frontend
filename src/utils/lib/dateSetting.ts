export const getCurrentYearStartDate = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const defaultStartYear = new Date(currentYear - 1, today.getMonth(), 1);
  defaultStartYear.setDate(defaultStartYear.getDate() + 1);
  return new Date(defaultStartYear).toISOString().split('T')[0]; 
};

export const getCurrentYearEndDate = () => {
  const today = new Date();
  const defaultEndYear = new Date(today.getFullYear(), today.getMonth(), 0)
  defaultEndYear.setDate(defaultEndYear.getDate() + 1)
  return new Date(defaultEndYear).toISOString().split('T')[0];
};