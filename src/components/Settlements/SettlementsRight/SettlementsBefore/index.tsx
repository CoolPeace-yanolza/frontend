import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import SyncIcon from '@assets/icons/sync-outline.svg';
import receiptIcon from '@assets/icons/receipt-sharp.svg';
import theme from '@styles/theme'; 
import SettlementedBeforeUpdate from './SettlementsBeforeUpdate';
import Loading from './SettlementsBeforeUpdate/index.loading';
import ErrorFallback from './SettlementsBeforeUpdate/index.error';

const SettlementsBefore = () => {

  const { reset } = useQueryErrorResetBoundary();

  const currentDate = new Date();
  const lastMonth = new Date(currentDate);
  lastMonth.setMonth(currentDate.getMonth() - 1);
  lastMonth.setDate(1);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;
  };

  return (
    <Container>
    <InnerContainer>
      <ExpectedContainer>
        <SettlementedMonth>
        {`${currentDate.getMonth() + 1}월`}
      <ExpectedText>
      정산 금액
      </ExpectedText>
      </SettlementedMonth>
      <CommonContainer>
      <Icon
        src={SyncIcon}
        alt="업데이트" />
      <UpdatedText>
        매월 1일 00시 00분 업데이트
      </UpdatedText>
      </CommonContainer>
      </ExpectedContainer>
      <UpdatedContainer>
        <MoneyContainer>
          <MoneyText>
            쿠폰 적용 금액
          </MoneyText>
          <MoneyDay>
          {`${lastMonth.getFullYear()}.${lastMonth.getMonth() < 9 ? '0' : ''}${lastMonth.getMonth() + 1}.01 ~ ${formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 0))}`}
          </MoneyDay>
        </MoneyContainer>
        <ErrorBoundary
              onReset={reset}
              fallbackRender={ErrorFallback}
            >
          <Suspense fallback={<Loading />}>
        <SettlementedBeforeUpdate/>
        </Suspense>
        </ErrorBoundary>
      </UpdatedContainer>
    </InnerContainer>
    <ReceiptIcon
     src={receiptIcon}
     alt="영수증" />
  </Container>
  )
}

export default SettlementsBefore;

const Container = styled.div`
  margin: 0px 15px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    margin-left: 15px;
    margin-right: 0px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const ExpectedContainer = styled.div`
  margin-top: 30px;

  ${theme.response.tablet} {
    margin: 0px;
  }
`;

const SettlementedMonth = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: white;

  & > span {
    font-size: 18px;
  }

  @media (max-width: 478px) {
    font-size: 17px;

    & > span {
      font-size: 14px;
    }
  }
`;

const ExpectedText = styled.span`
  margin-left: 5px;
`;

const CommonContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

const UpdatedText = styled.div`
  margin-top: 1px;

  font-size: 11px;
  font-weight: normal;
  color: #CDCFD0;

  @media (max-width: 478px) {
    font-size: 9px;
  }
`;

const UpdatedContainer = styled.div`
  width: 100%;

  margin-top: 25px;
  border: 1.5px solid white;
  border-radius: 8px;
`;

const MoneyContainer = styled.div`
  margin: 15px;
`;

const MoneyText = styled.div`
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: bold;
  color: white;

  @media (max-width: 478px) {
    font-size: 12px;
  }
`;

const MoneyDay = styled.div`
  font-size: 12px;
  color: white;

  @media (max-width: 478px) {
    font-size: 9px;
  }
`;

const Icon = styled.img`
  margin-right: 3px;
`;

const ReceiptIcon = styled.img`
  max-width: 200px;
  
  margin-top: 40px;
  margin-left: auto;

  ${theme.response.tablet} {
    display: none;
  }
`;