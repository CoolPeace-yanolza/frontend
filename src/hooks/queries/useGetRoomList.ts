import { useSuspenseQuery } from '@tanstack/react-query';

import { RoomListType } from '@/types/register';
import getRoomList from 'src/api/lib/getRoomList';

const useGetRoomList = (id: number) => {
  return useSuspenseQuery<RoomListType>({
    queryKey: ['roomList', id],
    queryFn: () => getRoomList(id)
  });
};

export default useGetRoomList;
