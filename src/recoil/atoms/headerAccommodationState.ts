import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { headerAccommodationAtom } from '@/types/header';

const { persistAtom } = recoilPersist();

const headerAccommodationState = atom<headerAccommodationAtom>({
  key: 'headerAccommodationState',
  default: {
    /* HACK: 로그인 구현 완료 후 리코일 초기값 설정 방법

      1. React Query에서 API 요청을 성공하면, 
      2. recoil 상태를 체크하여 비어있는 경우에만 setRecoilState로 업데이트

     */
    accommodationId: 1,
    accommodationName: '영덕 아이스 풀빌라'
  },
  effects_UNSTABLE: [persistAtom]
});

export default headerAccommodationState;
