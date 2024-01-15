import styled from '@emotion/styled';

import TotalReport from './TotalReport';
import Catchphrase from './Catchphrase';

const RightSection = () => {
  return (
    <Section>
      <TotalReport />
      <Catchphrase />
    </Section>
  );
};

export default RightSection;

const Section = styled.section`
  width: 250px;
  max-height: fit-content;

  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 30px;
`;
