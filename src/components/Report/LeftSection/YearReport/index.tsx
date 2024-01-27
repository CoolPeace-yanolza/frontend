import styled from '@emotion/styled';

import { renderCouponAmount, renderCouponText } from '@utils/index';
import { YearReportProps } from '@/types/report';
import theme from '@styles/theme';

const YearReport = ({ yearReport }: { yearReport: YearReportProps }) => {
  return (
    <Container>
      <InnerContainer>
        {yearReport.map((data, index) => (
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

  margin-top: 30px;
  border-radius: 16px;

  background-color: #fafafb;

  ${theme.response.tablet} {
    margin-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  padding: 25px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.response.tablet} {
    width: 100%;

    padding: 0;
  }
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

  ${theme.response.tablet} {
    min-width: 33%;
    min-height: 50px;

    padding: 8px 6px;

    background-color: #fafafb;
  }
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: 700;

  align-self: flex-start;

  ${theme.response.tablet} {
    align-self: center;

    font-size: 10px;
  }
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

  ${theme.response.tablet} {
    height: 20px;

    border-radius: 7px;

    font-size: 10px;
  }
`;
