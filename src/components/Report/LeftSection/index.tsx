import styled from '@emotion/styled';

import { DashboardHeader } from '@components/common';
import YearReport from './YearReport';
import Graph from './Graph';

const LeftSection = () => {
  /*
    // react-query : API 요청으로 TotalReportInfo fetch
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
      },
      {
        statistics_month: '3',
        total_sales: '4500000',
        coupon_total_sales: '4000000'
      },
      {
        statistics_month: '4',
        total_sales: '5000000',
        coupon_total_sales: '4200000'
      },
      {
        statistics_month: '5',
        total_sales: '6000000',
        coupon_total_sales: '5100000'
      },
      {
        statistics_month: '6',
        total_sales: '7000000',
        coupon_total_sales: '6200000'
      },
      {
        statistics_month: '7',
        total_sales: '8000000',
        coupon_total_sales: '7300000'
      },
      {
        statistics_month: '8',
        total_sales: '9000000',
        coupon_total_sales: '8400000'
      },
      {
        statistics_month: '9',
        total_sales: '9500000',
        coupon_total_sales: '9100000'
      },
      {
        statistics_month: '10',
        total_sales: '10000000',
        coupon_total_sales: '10500000'
      },
      {
        statistics_month: '11',
        total_sales: '11500000',
        coupon_total_sales: '11000000'
      },
      {
        statistics_month: '12',
        total_sales: '12500000',
        coupon_total_sales: '12000000'
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
  min-width: 1016px;
  height: 100%;

  border-radius: 20px;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  flex: 2;

  background-color: white;
`;
