import { useState } from 'react';
import { useRecoilValue_TRANSITION_SUPPORT_UNSTABLE } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState } from '@recoil/index';
import UseSelectedYear from './index.context';
import { useGetYearReport } from '@hooks/index';
import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';
import theme from '@styles/theme';

const LeftSection = () => {
  const selectedAccommodation = useRecoilValue_TRANSITION_SUPPORT_UNSTABLE(
    headerAccommodationState
  );
  const useSelectedYear = useState({ year: 2023 });

  const { data: yearReportData } = useGetYearReport(
    selectedAccommodation.id,
    useSelectedYear[0].year
  );
  const { coupon_sales_list: graphProps, ...yearReportProps } = yearReportData;
  const yearReport = Object.entries(yearReportProps);

  return (
    <UseSelectedYear.Provider value={useSelectedYear}>
      <Container>
        <DashboardHeader />
        <Graph graphData={graphProps} />
        <YearReport yearReport={yearReport} />
      </Container>
    </UseSelectedYear.Provider>
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
  justify-self: center;
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
