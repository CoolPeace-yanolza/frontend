// GraphSection

type HeaderTagStyleProps = {
  $active: boolean;
};

export type GraphHeaderTag = Pick<HeaderTagStyleProps, '$active'>;

export type MonthReportsResults = {
  statistics_year: number;
  statistics_month: number;
  coupon_total_sales: number;
  download_count: number;
  used_count: number;
  settlement_amount: number;
  conversion_rate: number;
};

// DownloadReport

type CouponCounterType = 'download' | 'used';

export type CouponCounterProps = {
  type: CouponCounterType;
  result: number;
};

export type CouponCounterStyleProps = {
  $type: string;
};

export type CouponRateResult = Pick<CouponCounterProps, 'result'>;

// CouponStatus

export type StatusItemProps = {
  title: string;
  result: string;
  index?: number;
};

export type StatusItemStyleProps = {
  $index?: number;
};

export type CouponStatusResults = {
  coupon_total_sales: number;
  used_count: number;
  settlement_amount: number;
  download_count: number;
};

// LocalInformationSection

export type RankingBoxProps = {
  children: React.ReactNode;
  rank: number;
};

export type RankingBoxStyleProps = {
  $rankingColor: number;
};

export type CouponRankingResult = {
  first_coupon_title: string;
  second_coupon_title: string;
  third_coupon_title: string;
};

// DailyReport

export type DailyReportResult = {
  condition_num: number;
  condition: string;
  coupon_titles: string[];
};
