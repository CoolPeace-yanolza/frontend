import styled from '@emotion/styled';

import { SettlementsRight, SettlementsLeft } from '@components/Settlements';
import theme from '@styles/theme';

const Settlements = () => {
  return (
    <Container>
      <SettlementsLeft />
      <SettlementsRight />
    </Container>
  );
};

export default Settlements;

const Container = styled.div`
  width: 100%;
  display: flex;
  border-radius: 1.25rem;

  ${theme.response.tablet} {
    flex-direction: column-reverse;
  }
`;
