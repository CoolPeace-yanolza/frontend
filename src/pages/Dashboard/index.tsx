import styled from '@emotion/styled';

import {
  DashboardLeftSection,
  DashboardRightSection
} from '@components/Dashboard';

const Dashboard = () => {
  return (
    <Container>
      <DashboardLeftSection />
      <DashboardRightSection />
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
