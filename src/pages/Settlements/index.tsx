import styled from '@emotion/styled';

import { SettlementsRight, SettlementsLeft } from '@components/Settlements';

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

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
