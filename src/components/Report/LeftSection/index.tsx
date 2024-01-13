import styled from '@emotion/styled';

import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';

const LeftSection = () => {
  /*
    // react-query : API 요청으로 TotallReportInfo fetch
    // url : /v1/dashboards/{accommodation_id}/reports/year

    // const { data: yearReportData } = useFetchYearReportData;
      
      {
        "coupon_total_sales" : "80600000",
        "coupon_use_sales" : "10000000",
        "coupon_total_used_count" : "3843201",
        "coupon_sales_list": [{
              "statistics_month":"1",
              "total_sales":"4000000",
              "coupon_total_sales":"3500000"
              },{
              "statistics_month":"2",
              "total_sales":"3000000",
              "coupon_total_sales":"3100000"
              }
              ...]
      }

      // 데이터 비구조화 할당으로 props 분리
      const { coupon_sales_list: GraphProps, ...YearReportProps } = yearReportData 

  */

  const yearReportFetchData = {
    coupon_total_sales: '42000000',
    coupon_use_sales: '365',
    coupon_total_used_count: '9800000',
    coupon_sales_list: [
      {
        statistics_month: '1',
        total_sales: '4000000',
        coupon_total_sales: '3500000'
      },
      {
        statistics_month: '2',
        total_sales: '3000000',
        coupon_total_sales: '3100000'
      }
    ]
  };

  const { coupon_sales_list: graphProps, ...yearReportProps } =
    yearReportFetchData;

  // HACK: [string, string][]으로 데이터 변환
  const yearReportData = Object.entries(yearReportProps);

  return (
    <Container>
      <DashboardHeader />
      <Graph graphData={graphProps} />
      <YearReport yearReportData={yearReportData} />
    </Container>
  );
};

export default LeftSection;

const Container = styled.section`
  border-radius: 20px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 7;

  background-color: white;
`;
