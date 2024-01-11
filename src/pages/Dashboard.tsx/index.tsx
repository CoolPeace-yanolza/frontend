import styled from '@emotion/styled';

import {
  GraphSection,
  CouponStatusSection,
  CouponRecommendSection,
  DailyReportSection
} from '@components/Dashboard';

const Dashboard = () => {
  return (
    <Container>
      <SectionLeft>
        <GraphSection />
        <CouponRecommendSection />
      </SectionLeft>
      <SectionRight>
        <CouponStatusSection />
        <DailyReportSection />
      </SectionRight>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const SectionLeft = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 8;
`;

const SectionRight = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 2;
`;
