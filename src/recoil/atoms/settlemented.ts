import { atom } from 'recoil';
import { SettlementItem } from '@/types/settlements';

export const settlementDataState = atom<SettlementItem[]>({
  key: 'settlementData',
  default: [],
});
