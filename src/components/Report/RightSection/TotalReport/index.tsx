import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import { headerAccommodationState } from '@recoil/index';
import useGetTotalReport from '@hooks/queries/useGetTotalReport';
import { renderTotalAmount, renderTotalText } from '@utils/index';
import { AmountStyleProps } from '@/types/report';

const TotalReport = () => {
  const headerSelectState = useRecoilValue(headerAccommodationState);
  const { data: TotalReportResult } = useGetTotalReport(
    headerSelectState.accommodationId
  );
  const TotalReportArray = Object.entries(TotalReportResult);

  return (
    <Container>
      <Title>누적 똑똑 현황</Title>
      <ContentsWrapper>
        {TotalReportArray.map((data, index) => (
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

  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const Title = styled.span`
  padding: 16px 0;

  font-size: 17px;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  width: 100%;

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
