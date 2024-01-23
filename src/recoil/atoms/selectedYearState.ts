import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const selectedYearState = atom<{ year: number }>({
  key: 'selectYearState',
  default: { year: 0 },
  effects_UNSTABLE: [persistAtom]
});

export default selectedYearState;
