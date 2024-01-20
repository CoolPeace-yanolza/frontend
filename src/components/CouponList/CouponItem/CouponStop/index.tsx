import { useState } from 'react';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import toggleOnIcon from '@assets/icons/ic-couponlist-toggleOn.svg';
import toggleOffIcon from '@assets/icons/ic-couponlist-toggleOff.svg';
import { ToggleStyleProps } from '@/types/couponList';
import { CouponListProps } from '../CouponExpose';

const CouponStop = ({ couponInfo }: CouponListProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <CouponContainer $isToggle={isToggle}>
      <CouponHeaderContainer>
        <CouponHeader>
          <CouponTitle>{couponInfo.title}</CouponTitle>
          <ToggleWrap
            $isToggle={isToggle}
            onClick={handleToggle}
          >
            {isToggle ? (
              <>
                <ToggleOn>ON</ToggleOn>
                <ToggleOnImg
                  src={toggleOnIcon}
                  alt="토글 On 이미지 "
                />
              </>
            ) : (
              <>
                <ToggleOffImg
                  src={toggleOffIcon}
                  alt="toggle off icon"
                />
                <ToggleOff>OFF</ToggleOff>
              </>
            )}
          </ToggleWrap>
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
        <ContentContainer>
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
        </ContentContainer>
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
    </CouponContainer>
  );
};

export default CouponStop;

const CouponContainer = styled.div<ToggleStyleProps>`
  width: 290px;
  height: 203px;

  border-radius: 8px;

  background: ${props => (props.$isToggle ? '#ffebf1' : '#ECF0FA')};
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

const CouponCustomer = styled.div`
  color: #404040;
  font-size: 18px;
  font-weight: 700;
`;

const ToggleWrap = styled.button<ToggleStyleProps>`
  width: 50px;
  height: 22.93;

  border-radius: 22.93px;
  border: 1px solid;
  border-color: ${props => (props.$isToggle ? '#FF3478' : '#404446')};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};
  cursor: pointer;
`;

const ToggleOn = styled.div`
  margin: 2px 5px 1px 1px;

  font-size: 10px;
  font-weight: 700;
  color: ${theme.colors.pink500};
`;

const ToggleOff = styled.div`
  margin-top: 2px;

  font-size: 10px;
  font-weight: 700;
  color: #404446;
`;
const ToggleOnImg = styled.img`
  margin: 1px;
`;

const ToggleOffImg = styled.img`
  margin: 1px;
  margin-left: -3.5px;
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

  color: #505050;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

// HACK: ContentContainer 로직 추가하기
const ContentContainer = styled.div``;

const ContentWrap = styled.div`
  margin: 8px;

  display: flex;
  align-items: center;
`;

const ContentTitle = styled.div`
  margin-right: 5px;

  color: #505050;
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

  color: #ff3478;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
`;

const ExposeValue = styled.div`
  color: #ff3478;
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
