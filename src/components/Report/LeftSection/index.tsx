import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState } from '@recoil/index';
import { useGetYearReport } from '@hooks/index';
import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';
import theme from '@styles/theme';

const LeftSection = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  const { data: yearReportData } = useGetYearReport(headerSelectState.id);
  const { coupon_sales_list: graphProps, ...yearReportProps } = yearReportData;
  const yearReport = Object.entries(yearReportProps);

  return (
    <Container>
      <DashboardHeader />
      <Graph graphData={graphProps} />
      <YearReport yearReport={yearReport} />
    </Container>
  );
};

export default LeftSection;

const Container = styled.section`
  min-width: 1016px;
  height: 100%;

  border-radius: 20px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  flex: 2;

  background-color: white;

  ${theme.response.tablet} {
    min-width: auto;

    margin: 10px 15px 20px 15px;
    padding: 12px 15px;

    justify-content: center;
    align-items: center;

    background-color: #fafafb;
  }
`;
