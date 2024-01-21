import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState } from '@recoil/index';
import { useGetYearReport } from '@hooks/index';
import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';

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
`;
