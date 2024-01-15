import styled from '@emotion/styled';

import { renderTotalAmount, renderTotalText } from '@utils/index';
import { AmountStyleProps } from '@/types/report';

const TotalReport = () => {
  /* 
    // react-query : API 요청으로 TotalReportData fetch
    // url : /v1/dashboards/{accommodation_id}/reports/total

    const { data: TotalReportData } = useFetchTotalReportData;

    // TODO: 아래 객체 형태의 TotalReportData를 배열로 바꿔 map으로 동적 컴포넌트 생성 
    
      {
        "coupon_total_sales" : "80600000",
        "coupon_use_sales" : "10000000",
        "coupon_total_used_count" : "3843201",
        "coupon_total_download_count" : "400000",
      }

    // 방법 1: 렌더링마다 새 객체 하지 않도록 React-Query에서 OnSuccess에서 변환 -> 순서 보장 X
      const InfoArray = Object.values(TotalReportData);
      const InfoArray = Object.entries(strObj);

    // 방법 2: 클라이언트에서 변경하는 것보다 처음부터 순서가 보장되도록 배열로 달라고 요청하기
    // 멘토링 질문 : 이럴경우 백에서 배열로 넘겨주는 것이 비즈니스 요청사항이 수정되었을 때 유지 보수 측면에서 좋은지

  */

  // HACK: 순서가 보장된 배열로 받기
  // HACK: key 값이 변경되어 에러가 발생했을 때 대응하기 (에러 바운더리)
  const TotalReportData = [
    ['coupon_total_sales', '80600000'],
    ['coupon_use_sales', '10000000'],
    ['coupon_total_used_count', '3843201'],
    ['coupon_total_download_count', '400000']
  ];

  return (
    <Container>
      <Title>누적 똑똑 현황</Title>
      <ContentsWrapper>
        {TotalReportData.map((data, index) => (
          <Contents key={index}>
            <Text>{renderTotalText(data[0])}</Text>
            <Amount $isfirstamount={index}>{renderTotalAmount(data)}</Amount>
          </Contents>
        ))}
      </ContentsWrapper>
    </Container>
  );
};

export default TotalReport;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 45px 12px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 25px;

  background-color: white;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  width: 100%;

  margin-top: 20px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Contents = styled.div`
  width: 100%;
  height: 110px;

  border-radius: 16px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: #fafafb;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 700;
`;

const Amount = styled.span<AmountStyleProps>`
  width: 100%;
  height: 100px;

  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => (props.$isfirstamount ? '#022c79' : '#FF3478')};
  background-color: white;
  font-size: 20px;
  font-weight: 700;
`;
