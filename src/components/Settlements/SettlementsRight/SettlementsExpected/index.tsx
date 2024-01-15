import styled from '@emotion/styled';

import SyncIcon from '@assets/icons/sync-outline.svg';

const SettlementsExpected = () => {
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
          <ExpectedText>
            {`${nextMonth.getMonth() + 1}월 정산 예정 금액`}
          </ExpectedText>
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
          <UpdatedInnerContainer>
            <UpdatedWrapper>
              <WrapperTop>
                <DueDateText>
                  정산예정일
                </DueDateText>
                <DueDateDay>
                {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 2}월 10일`}
                </DueDateDay>
              </WrapperTop>
              <WrapperBottom>
                <DueDateText>
                  {`${currentDate.getMonth() + 1}월 1일부터 현재까지 금액`}
                </DueDateText>
                <CommonContainer>
                  <Icon src={SyncIcon} alt="업데이트" />
                  <UpdatedText>
                    매일 00시 00분에 업데이트
                  </UpdatedText>
                </CommonContainer>
                <DueDateDay>
                  50000원
                </DueDateDay>
              </WrapperBottom>
            </UpdatedWrapper>
          </UpdatedInnerContainer>
        </UpdatedContainer>
      </InnerContainer>
    </Container>
  );
};

export default SettlementsExpected;

// 나머지 스타일 컴포넌트는 그대로 유지


const Container = styled.div`
  margin: 15px;

  display: flex;
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const ExpectedContainer = styled.div`
  margin-top: 96px;
`;

const ExpectedText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
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
`;

const UpdatedContainer = styled.div`
  width: 100%;

  margin-top: 40px;

  border: 1.5px solid white;
  border-radius: 8px;
`;

const UpdatedInnerContainer = styled.div`
  margin-top: 20px;

  background-color: white;

  border: 1px solid white;
  border-radius: 5px;
`;

const UpdatedWrapper = styled.div`
  margin: 15px;
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const DueDateText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const DueDateDay = styled.div`
  margin-left: auto;
  margin-top: 10px;

  align-items: flex-end

  font-size: 16px;
  font-weight: bold;
  color: #3182F6;
`;

const WrapperBottom = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

const CouponContainer = styled.div`
  margin: 15px;
`;

const CouponText = styled.div`
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const CouponDay = styled.div`
  font-size: 12px;
  color: white;
`;

const Icon = styled.img`
  margin-right: 3px;
`;
