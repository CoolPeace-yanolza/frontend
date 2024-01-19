import styled from '@emotion/styled';

import { RoomListProps } from '@/types/register';

const RoomList = ({ rooms }: RoomListProps) => {
  return (
    <>
      {rooms.length > 0 && (
        <Container>
          {rooms.map((room, index) => (
            <Room key={index}>{room}</Room>
          ))}
        </Container>
      )}
    </>
  );
};

export default RoomList;

const Container = styled.div`
  width: 111px;
  max-height: 121px;

  margin-top: -9px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;

  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow: auto;
`;

const Room = styled.div`
  font-size: 10px;
  font-weight: 400;
`;
