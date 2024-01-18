import styled from '@emotion/styled';

import { renderCouponAmount, renderCouponText } from '@utils/index';
import { YearReportProps } from '@/types/report';

const YearReport = ({
  yearReportData
}: {
  yearReportData: YearReportProps;
}) => {
  return (
    <Container>
      <InnerContainer>
        {yearReportData.map((data, index) => (
          <Contents key={index}>
            <Text>{renderCouponText(data[0])}</Text>
            <Amount>{renderCouponAmount(data)}</Amount>
          </Contents>
        ))}
      </InnerContainer>
    </Container>
  );
};

export default YearReport;

const Container = styled.div`
  width: 100%;

  border-radius: 16px;

  background-color: #fafafb;
`;

const InnerContainer = styled.div`
  height: 100%;

  padding: 25px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Contents = styled.div`
  min-width: 30%;
  min-height: 130px;

  border-radius: 18.5px;
  padding: 20px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 0.3;

  background-color: #f2f4f5;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 700;

  align-self: flex-start;
`;

const Amount = styled.span`
  width: 100%;
  height: 55px;

  border-radius: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ff3478;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
`;
