import styled from '@emotion/styled';

import theme from '@styles/theme';
import { RoomListProps } from '@/types/register';
import { sliceName } from '@utils/index';

const RoomList = ({ rooms }: RoomListProps) => {
  return (
    <>
      {rooms.length > 0 && (
        <Container>
          {rooms.map(room => (
            <Room key={room.id}>{sliceName(room.roomNumber)}</Room>
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

  font-size: 10px;
  font-weight: 400;

  overflow: auto;

  ${theme.response.tablet} {
    width: 13vw;
    max-height: 80px;

    padding: 1.2vw;

    font-size: 1.4vw;

    overflow-y: hidden;
  }

  @media (max-width: 550px) {
    width: 70px;

    font-size: 8px;
  }
`;

const Room = styled.div``;
