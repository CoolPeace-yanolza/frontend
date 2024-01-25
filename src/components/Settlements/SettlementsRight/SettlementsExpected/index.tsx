import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import SyncIcon from '@assets/icons/sync-outline.svg';
import theme from '@styles/theme';
import SettlementsUpdate from './SettlementsUpdate';
import Loading from './SettlementsUpdate/index.loading';
import ErrorFallback from './SettlementsUpdate/index.error';

const SettlementsExpected = () => {

  const { reset } = useQueryErrorResetBoundary();

  const currentDate = new Date();

  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(currentDate.getMonth() + 1);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;
  };

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

  return (
    <Container>
      <InnerContainer>
        <ExpectedContainer>
          <TextContainer>
            <ExpectedMonth>
              {`${nextMonth.getMonth() + 1}월`}
                <ExpectedText>
                  정산 예정 금액
              </ExpectedText>
            </ExpectedMonth>
          </TextContainer>
          <CommonContainer>
            <Icon src={SyncIcon} alt="업데이트" />
            <UpdatedText>
              매월 1일 00시 00분 업데이트
            </UpdatedText>
          </CommonContainer>
        </ExpectedContainer>
        <UpdatedContainer>
          <CouponContainer>
            <CouponText>
              쿠폰 적용 기간
            </CouponText>
            <CouponDay>
            {`${formatDate(firstDayOfMonth)} ~ ${formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0))}`}
            </CouponDay>
          </CouponContainer>
          <ErrorBoundary
              onReset={reset}
              fallbackRender={ErrorFallback}
            >
          <Suspense fallback={<Loading />}>
          <SettlementsUpdate />
          </Suspense>
          </ErrorBoundary>
        </UpdatedContainer>
      </InnerContainer>
    </Container>
  );
};

export default SettlementsExpected;

const Container = styled.div`
  display: flex;
  margin: 150px 15px 30px 15px;
  align-items: center;

  ${theme.response.tablet} {
    margin: 0px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const ExpectedContainer = styled.div`
`;

const TextContainer = styled.div`
  display: flex;
`;

const ExpectedMonth = styled.p`
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

const CouponContainer = styled.div`
  margin: 15px;
`;

const CouponText = styled.div`
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: bold;
  color: white;

  @media (max-width: 478px) {
    font-size: 12px;
  }
`;

const CouponDay = styled.div`
  font-size: 12px;
  color: white;

  @media (max-width: 478px) {
    font-size: 10px;
  }
`;

const Icon = styled.img`
  margin-right: 3px;
`;
