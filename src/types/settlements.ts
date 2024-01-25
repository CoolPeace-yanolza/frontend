export interface SettlementItem {
    'NO': number;
    '쿠폰 적용일': string;
    '쿠폰번호': number;
    '관리 쿠폰명': string;
    '사용 건수': string;
    '쿠폰 할인 금액': string;
    '쿠폰 취소 금액': string;
    '정산 금액': string;
    '정산 완료일': string;
};

export type SettlementsTableProps = { data: SettlementedItem[], pageStartNumber: number };

export interface SettlementsPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems: number;
};

export interface SettlementsPopupProps {
    isOpen: boolean;
    onClose: () => void;
};

export interface SettlementList {
    settlement_list: SettlementedItem[];
};

export interface SettlementedList {
    total_settlement_count: number;
    total_page_count: number;
    settlement_responses: SettlementedItem[];
};
  
export interface SettlementedItem {
    NO: number;
    coupon_use_date: string;
    coupon_number: string;
    coupon_name: string;
    coupon_count: number;
    discount_price: number;
    cancel_price: number;
    sum_price: number;
    complete_at: string;
};

export interface SettlementParams {
    accommodationId: string;
    page: number;
    pageSize: number;
    start: string;
    end: string;
    order: string;
};

export interface SettlementedBefore {
    this_month_settlement_amount : number,
    last_month_settlement_amount :number
};