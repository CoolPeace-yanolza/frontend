import styled from '@emotion/styled';

import TotallReport from './TotallReport';

const RightSection = () => {
  return (
    <Container>
      <TotallReport />
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
