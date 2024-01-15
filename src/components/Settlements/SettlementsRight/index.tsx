import styled from '@emotion/styled';

import SettlementsBefore from "./SettlementsBefore"
import SettlementsExpected from "./SettlementsExpected"
import settlementsLogo from '@assets/icons/settlements-logo.svg'; 

const SettlementsRight = () => {
  return (
    <Container>
        <InnerContainer>
          <SettlementsExpected />
          <SettlementsBefore />
        </InnerContainer>
          <Logo />
    </Container>
  )
}

export default SettlementsRight;

const Container = styled.div`
  position: relative;

  width: 20%;
  height: 100%;

  background-color: #1A2849;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
`;

const InnerContainer = styled.div`
  height: 100%;

  background-color: rgba(255, 255, 255, 0.1); 
  border: 1px solid rgba(255, 255, 255, 0.1); 
`;

const Logo = styled.div`
  position: absolute;

  width: 165px;
  height: 227px;

  top: 65%;
  right: 0;

  background: url(${settlementsLogo});
`;
