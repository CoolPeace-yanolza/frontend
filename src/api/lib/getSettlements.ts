import { SettlementedList } from '@/types/settlements';
import { instance } from '..';

const getSettlements = async (
  accommodationId: number,
  start?: string,
  end?: string,
  order?: string,
  page?: number,
  pageSize?: number 
): Promise<SettlementedList> => {
    
  // 유효성 확인 및 기본값 설정
  const validStart = start || 'defaultStartDate';
  const validEnd = end || 'defaultEndDate';
  const validOrder = order || 'defaultOrder';

  // 파라미터 객체에서 undefined 값 제거
  const params = {
    ...(validStart && { start: validStart }),
    ...(validEnd && { end: validEnd }),
    ...(validOrder && { order: validOrder }),
    ...(page && { page: page }), 
    ...(pageSize && { pageSize: pageSize }) 
  };

  try {
    const response = await instance.get(`/v1/settlements/${accommodationId}`, {
      params,
    });

    console.log(response);
    console.log(response.data);


    return response.data;
  } catch (error) {
    console.error('Error fetching settlements:');
    throw error;
  }
};

export default getSettlements;
