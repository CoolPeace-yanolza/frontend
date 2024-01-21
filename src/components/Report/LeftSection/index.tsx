import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState } from '@recoil/index';
import { useGetYearReport } from '@hooks/index';
import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';

const LeftSection = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  // HACK: recoil로 쿼리 정보 가져오기, 이슈 #67 에서 작업중
  const { data: yearReportData } = useGetYearReport(
    headerSelectState.accommodationId
  );
  const { coupon_sales_list: graphProps, ...yearReportProps } = yearReportData;
  // HACK: 배열 순서 변경 필요, 이슈 #67 에서 작업중
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
