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
      <LeftSection>
        <GraphSection />
        <CouponRecommendSection />
      </LeftSection>
      <RightSection>
        <CouponStatusSection />
        <DailyReportSection />
      </RightSection>
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

const LeftSection = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  flex: 2;
`;

const RightSection = styled.div`
  width: 250px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
