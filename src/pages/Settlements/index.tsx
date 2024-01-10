import styled from '@emotion/styled';

import { SettlementsRight, SettlementsLeft } from '@components/Settlements';

const Settlements = () => {
  return (
    <Container>
      <SettlementsLeft />
      <SettlementsRight />
    </Container>
  )
}

export default Settlements;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  background: linear-gradient(45deg, rgba(17, 31, 63, 1), rgba(26, 40, 73, 0.75));
  border-radius: 1.25rem;
`;
