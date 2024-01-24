import { atom } from 'recoil';

const selectedYearState = atom<{ year: number }>({
  key: 'selectYearState',
  default: { year: new Date().getFullYear() }
});

export default selectedYearState;
