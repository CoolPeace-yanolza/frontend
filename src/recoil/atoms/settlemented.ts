import { atom } from 'recoil';
import { SettlementedItem } from '@/types/settlements';

  export const settlementDataState = atom<SettlementedItem[]>({
    key: 'settlementData',
    default: []
  });

  export const settlementsDateState = atom<{startDate: Date | null, endDate: Date | null}>({
    key: 'settlementsDate',
    default: { startDate: null, endDate: null }
  });