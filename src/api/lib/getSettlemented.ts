import { SettlementedBefore } from '@/types/settlements';
import { instance } from '..';

const getSettlemented = async (accommodation_id: number): Promise<SettlementedBefore> => {
  try {
    const response = await instance.get(`/v1/settlements/${accommodation_id}/summary`);

    console.log(response);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching settlementedBefore:');
    throw error;
  }
};

export default getSettlemented;
