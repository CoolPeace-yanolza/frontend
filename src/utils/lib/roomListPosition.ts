import { RoomListStyleProps } from '@/types/couponList';
import { useEffect } from 'react';

export const useUpdateRoomListPosition = ({
  isShowRoomList,
  roomListStyleRef,
  setIsBottom
}: RoomListStyleProps) => {
  const updateRoomListPosition = () => {
    if (roomListStyleRef.current) {
      const roomListRect = roomListStyleRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      setIsBottom(roomListRect.bottom > viewportHeight);
    }
  };

  useEffect(() => {
    const handleResizeOrScroll = () => {
      updateRoomListPosition();
    };

    // 스크롤 및 창 크기 변경 이벤트에 리스너 추가
    window.addEventListener('scroll', handleResizeOrScroll);
    window.addEventListener('resize', handleResizeOrScroll);

    // 컴포넌트 마운트 시 또는 isShowRoomList 상태 변경 시 위치 업데이트
    handleResizeOrScroll();

    // 컴포넌트 언마운트 시 또는 의존성 배열 내 값이 변경될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleResizeOrScroll);
      window.removeEventListener('resize', handleResizeOrScroll);
    };
  }, [isShowRoomList]); // 의존성 배열에 isShowRoomList 추가
};
