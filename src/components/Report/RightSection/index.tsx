import styled from '@emotion/styled';

import TotalReport from './TotalReport';

const RightSection = () => {
  return (
    <Container>
      <TotalReport />
    </Container>
  );
};

export default RightSection;

const Container = styled.section`
  width: 250px;
  max-height: fit-content;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-self: flex-start;

  background-color: white;
`;
