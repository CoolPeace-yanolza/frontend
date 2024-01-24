import { atom } from 'recoil';

export interface CategoryTab {
  categoryTab: string;
}

const categoryTabState = atom<CategoryTab>({
  key: 'categoryTabState',
  default: { categoryTab: '전체' }
});

export default categoryTabState;
