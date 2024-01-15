import styled from '@emotion/styled';

import SyncIcon from '@assets/icons/sync-outline.svg';


const SettlementsExpected = () => {
  return (
    <Container>
    <InnerContainer>
      <ExpectedContainer>
      <ExpectedText>
        정산 예정 금액
      </ExpectedText>
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
        <CouponContainer>
          <CouponText>
            쿠폰 적용 기간
          </CouponText>
          <CouponDay>
            2024.04.01 ~ 2024.04.30
          </CouponDay>
        </CouponContainer>
      <UpdatedInnerContainer>
        <UpdatedWrapper>
          <WrapperTop>
            <DueDateText>
              정산예정일
            </DueDateText>
            <DueDateDay>
              2024년 5월 10일
            </DueDateDay>
          </WrapperTop>
          <WrapperBottom>
            <DueDateText>
              4월 1일부터 현재까지 금액
            </DueDateText>
            <CommonContainer>
              <Icon
                src={SyncIcon}
                alt="업데이트" />
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
  )
}

export default SettlementsExpected;

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
  margin-top: 40px;

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
