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

export type SettlementsTableProps = { data: SettlementItem[], pageStartNumber: number };

export interface SettlementsPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export interface SettlementsPopupProps {
    isOpen: boolean;
    onClose: () => void;
};