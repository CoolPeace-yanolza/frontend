import styled from '@emotion/styled';

import theme from '@styles/theme';

const CouponExpired = () => {
  return (
    <CouponContainer>
      <CouponHeaderContainer>
        <CouponHeader>
          <CouponTitle>2024 신년행사</CouponTitle>
          <CouponStatus>기간만료</CouponStatus>
        </CouponHeader>
        <CouponCustomer>모든 고객 10% 할인</CouponCustomer>
      </CouponHeaderContainer>
      <CouponMain>
        <CountWrap>
          <CountText>다운로드</CountText>
          <CountNumber>50</CountNumber>
        </CountWrap>
        <CountWrap>
          <CountText>사용완료</CountText>
          <CountNumber>50</CountNumber>
        </CountWrap>
        <div>
          <ContentWrap>
            <ContentTitle>가격</ContentTitle>
            <ContentValue>99,999,999원 이상</ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>일정</ContentTitle>
            <ContentValue>2박 이상, 일~목</ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>객실</ContentTitle>
            <ContentValue>전체</ContentValue>
          </ContentWrap>
        </div>
      </CouponMain>
      <DateContainer>
        <ExposeDateWrap>
          <ExposeDateTitle>노출기간</ExposeDateTitle>
          <ExposeValue>2024.01.31 ~ 2024.02.10</ExposeValue>
        </ExposeDateWrap>
        <ExposeDateWrap>
          <RegisterDateTitle>등록일</RegisterDateTitle>
          <RegisterDateValue>2024.12.01</RegisterDateValue>
        </ExposeDateWrap>
      </DateContainer>
      <Delete>삭제</Delete>
    </CouponContainer>
  );
};

export default CouponExpired;

const CouponContainer = styled.div`
  position: relative;

  width: 290px;
  height: 203px;

  border-radius: 8px;

  background: #ecf0fa;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
`;

const CouponHeaderContainer = styled.div`
  height: 64px;

  padding: 14px 10px 0 12px;
  border-bottom: 1px dashed #8f8f8f;

  display: flex;
  flex-direction: column;
`;

const CouponHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CouponTitle = styled.div`
  color: #8f8f8f;
  font-size: 11px;
  font-weight: 600;
`;

const CouponStatus = styled.div`
  width: 50px;
  height: 22.927px;

  border-radius: 22.927px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  color: #757676;
  background: ${theme.colors.white};
`;

const CouponCustomer = styled.div`
  color: #757676;
  font-size: 18px;
  font-weight: 700;
`;

const CouponMain = styled.div`
  padding: 12px 10px 0 12px;

  display: flex;
  align-items: center;
`;

const CountWrap = styled.div`
  width: 58px;
  height: 62px;

  margin-right: 7.5px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.white};
`;

const CountText = styled.div`
  color: #8f8f8f;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
`;

const CountNumber = styled.div`
  margin-top: 5px;

  color: #757676;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const ContentWrap = styled.div`
  margin: 8px;

  display: flex;
  align-items: center;
`;

const ContentTitle = styled.div`
  margin-right: 5px;

  color: #757676;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const ContentValue = styled.div`
  color: #8f8f8f;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const DateContainer = styled.div`
  padding: 9px 0 0 12px;
`;

const ExposeDateWrap = styled.div`
  margin-bottom: 4px;

  display: flex;
  align-items: center;
`;

const ExposeDateTitle = styled.div`
  margin-right: 5px;

  color: #757676;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const ExposeValue = styled.div`
  color: #757676;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const RegisterDateTitle = styled.div`
  margin-right: 5px;

  color: #757676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const RegisterDateValue = styled.div`
  color: #757676;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`;

const Delete = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  margin-right: 14px;
  margin-bottom: 14px;

  color: #757676;
  font-size: 11px;
  cursor: pointer;
`;
