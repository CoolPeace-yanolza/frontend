// GraphSection

type HeaderTagStyleProps = {
  $active: boolean;
};

export type GraphHeaderTag = Pick<HeaderTagStyleProps, '$active'>;

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