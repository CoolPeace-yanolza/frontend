import styled from '@emotion/styled';

import Settlemented from './Settlemented';
import SettlementsCalender from './SettlementsCalendar';
import SettlementsHeader from './SettlementsHeader';

const SettlementsLeft = () => {
  return (
    <Container>
        <SettlementsHeader/>
        <SettlementsCalender />
        <BreakLine>
            <hr />
        </BreakLine>
        <Settlemented />
    </Container>
  )
}

export default SettlementsLeft;

const Container = styled.div`
  width: 80%;
  height: 100%;
`;

const BreakLine = styled.div`
  margin: 0 40px;
`;