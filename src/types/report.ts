export type ReportGraphProps = {
  statistics_month: string;
  total_sales: string;
  coupon_total_sales: string;
}[];

export type YearReportProps = [string, string][];

export type AmountStyleProps = { $isfirstamount: number };

export type TotalReportResult = {
  coupon_total_sales: number;
  coupon_use_sales: number;
  coupon_total_used_count: number;
  coupon_total_download_count: number;
};

type CouponSalesItem = {
  statistics_month: string;
  total_sales: string;
  coupon_total_sales: string;
};

export type YearReportResult = {
  coupon_total_sales: string;
  coupon_use_sales: string;
  coupon_total_used_count: string;
  coupon_sales_list: CouponSalesItem[];
};
