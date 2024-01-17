import styled from '@emotion/styled';

import SettlementsSetting from './SettlementsSetting';

const SettlementsLeft = () => {
  return (
    <Container>
        <SettlementsSetting/>
    </Container>
  )
}

export default SettlementsLeft;

const Container = styled.div`
  width: 80%;
  min-width: 1110px;
  height: 100%;

  background: linear-gradient(45deg, rgba(17, 31, 63, 1), rgba(26, 40, 73, 0.75));
`;