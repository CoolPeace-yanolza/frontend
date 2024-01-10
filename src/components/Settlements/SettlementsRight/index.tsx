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

  background-color: rgba(205, 207, 208, 0.75);
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
`;


