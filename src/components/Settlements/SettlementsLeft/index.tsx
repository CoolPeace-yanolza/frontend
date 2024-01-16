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
  height: 100%;
`;