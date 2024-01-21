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

  background: linear-gradient(45deg, rgba(17, 31, 63, 1), rgba(26, 40, 73, 0.75));

  @media (max-width: 900px) {
    width: 100%;
    min-width: 0;
    background: #1A2849;
  }
`;