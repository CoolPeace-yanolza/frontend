import styled from '@emotion/styled';

import {
  DashboardHeader,
  GraphSection,
  CouponRankingSection,
  CouponStatusSection
} from '@components/Dashboard';

const Dashboard = () => {
  return (
    <StyledContainer>
      <DashboardHeader />
      <StyledInnerContainer>
        <StyledSectionLeft>
          <GraphSection />
          <CouponRankingSection />
        </StyledSectionLeft>
        <StyledSectionRight>
          <CouponStatusSection />
        </StyledSectionRight>
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ghostwhite;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const StyledSectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
