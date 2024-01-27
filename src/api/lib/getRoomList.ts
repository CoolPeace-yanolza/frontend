import { instance } from '..';

const getRoomList = async (id: number) => {
  const response = await instance.get(`v1/accommodation/${id}`);
  return response.data;
};

export default getRoomList;
