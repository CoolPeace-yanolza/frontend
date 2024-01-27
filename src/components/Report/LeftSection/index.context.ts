import { Dispatch, SetStateAction, createContext } from 'react';

// TEST : 선택 연도 Context 생성
const UseSelectedYear = createContext<
  [{ year: number }, Dispatch<SetStateAction<{ year: number }>>]
>([{ year: 0 }, () => {}]);

export default UseSelectedYear;
