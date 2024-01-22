import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState, selectedYearState } from '@recoil/index';
import { useGetYearReport } from '@hooks/index';
import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';

const LeftSection = () => {
  const selectedAccommodation = useRecoilValue(headerAccommodationState);
  const selectedYear = useRecoilValue(selectedYearState);
  const { data: yearReportData } = useGetYearReport(
    selectedAccommodation.id,
    selectedYear.year
  );
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
