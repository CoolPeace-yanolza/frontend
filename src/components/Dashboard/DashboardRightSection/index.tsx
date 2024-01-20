import styled from '@emotion/styled';

import CouponStatusSection from './CouponStatusSection';
import DailyReportSection from './DailyReportSection';

const DashboardRightSection = () => {
  return (
    <Container>
      <CouponStatusSection />
      <DailyReportSection />
    </Container>
  );
};

export default DashboardRightSection;

const Container = styled.div`
  min-width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
