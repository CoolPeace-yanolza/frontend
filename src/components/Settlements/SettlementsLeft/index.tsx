import styled from '@emotion/styled';

import theme from '@styles/theme';
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

  border-bottom-left-radius: 1.25rem;

  background: linear-gradient(45deg, rgba(17, 31, 63, 1), rgba(26, 40, 73, 0.75));

  ${theme.response.tablet} {
    width: 100%;
    min-width: 0;

    background: #1A2849;
  }
`;