import { atom } from 'recoil';

import { previewAtom } from '@/types/register';

const previewState = atom<previewAtom>({
  key: 'previewState',
  default: {
    customer: '쿠폰 제공 대상',
    discount: '할인 내용',
    minimumPrice: '최소 예약 금액',
    roomType: '',
    toAllRoom: '적용 객실',
    day: '할인 적용 요일',
    startDate: '노출 기간',
    endDate: ''
  }
});

export default previewState;
