import styled from '@emotion/styled';

import Settlemented from './Settlemented';
import SettlemntsCalender from './SettlementsCalendar';
import SettlementsHeader from './SettlementsHeader';

const SettlementsLeft = () => {
  return (
    <Container>
        <SettlementsHeader/>
        <SettlemntsCalender />
        <Settlemented />
    </Container>
  )
}

export default SettlementsLeft;

const Container = styled.div`
  width: 80%;
  height: 100%;
`;