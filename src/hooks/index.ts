/* lib hooks */
export { default as useOutsideClick } from './lib/useOutsideClick';
export { default as useStepValidation } from './lib/useStepValidation';

/* quries hooks */
export {
  useCouponUpdate,
  useCouponDelete,
  useToggleChange
} from './queries/useCouponList';
export { default as useGetTotalReport } from './queries/useGetTotalReport';
export { default as useGetYearReport } from './queries/useGetYearReport';
export { default as useGetCouponRanking } from './queries/useGetCouponRanking';
export { default as useGetDailyReport } from './queries/useGetDailyReport';
export { default as useGetLocalCouponUsage } from './queries/useGetLocalCouponUsage';
export { default as useGetMonthReports } from './queries/useGetMonthReports';
export { default as useGetMonthStatus } from './queries/useGetMonthStatus';
export { default as useGetRoomList } from './queries/useGetRoomList';
