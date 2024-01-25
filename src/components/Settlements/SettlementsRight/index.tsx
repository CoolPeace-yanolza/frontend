import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import SettlementsBefore from "./SettlementsBefore"
import SettlementsExpected from "./SettlementsExpected"
import settlementsLogo from '@assets/icons/settlements-logo.svg'; 
import theme from '@styles/theme';
import Loading from './SettlementsBefore/index.loading'
import ErrorFallback from './SettlementsBefore/index.error';
import { Suspense } from 'react';

const SettlementsRight = () => {

  const { reset } = useQueryErrorResetBoundary();

  return (
    <Container>
      <InnerContainer>
        <StyledSettlementsExpected>
        <SettlementsExpected />
        </StyledSettlementsExpected>
        <hr />
        <StyledSettlementsBefore>
          <ErrorBoundary
            onReset={reset}
            fallbackRender={ErrorFallback}
          >
            <Suspense fallback={<Loading />}>
              <SettlementsBefore />
            </Suspense>
          </ErrorBoundary>
        </StyledSettlementsBefore>
      </InnerContainer>
      <Logo />
    </Container>
  )
}

export default SettlementsRight;

const Container = styled.div`
  position: relative;

  width: 20%;
  min-width: 290px;

  background-color: #1A2849;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;

  ${theme.response.tablet} {
    width: 100%;
    min-width: 0;
    border-radius: 0;
  }
`;

const InnerContainer = styled.div`
  position: relative;

  height: 100%;

  border: 1px solid rgba(255, 255, 255, 0.1); 

  flex-direction: column; 
  align-items: center; 
  justify-content: center;

  z-index: 10;

  background-color: rgba(255, 255, 255, 0.1); 

  backdrop-filter: blur(20px);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);

  hr {
    margin: 0px 15px;
    border: 1px solid rgba(217, 217, 217, 0.2); 

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    ${theme.response.tablet} {
      display: none;
    }
  }

  ${theme.response.tablet} {
    margin: 20px;
    border: none;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
`;

const StyledSettlementsExpected = styled.div`
  ${theme.response.tablet} {
    width: 50%;
    height: 300px;
  }
`;
const StyledSettlementsBefore = styled.div`
  position: relative;

  z-index: 10;

  ${theme.response.tablet} {
    width: 50%;
    height: 300px;
  }
`;

const Logo = styled.div`
  position: absolute;

  width: 165px;
  height: 227px;

  top: 65%;
  right: 0;

  background: url(${settlementsLogo});

  ${theme.response.tablet} {
    position: static;

    width: 100%;
    max-width: 165px;
    height: auto;
    
    margin-top: 20px;
  }
`;
