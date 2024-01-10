import styled from '@emotion/styled';

import SettlementsBefore from "./SettlementsBefore"
import SettlementsExpected from "./SettlementsExpected"

const SettlementsRight = () => {
  return (
    <Container>
        <SettlementsExpected />
        <SettlementsBefore />
    </Container>
  )
}

export default SettlementsRight;

const Container = styled.div`
  width: 20%;
  height: 100%;

  background-color: #1A2849;
`;


