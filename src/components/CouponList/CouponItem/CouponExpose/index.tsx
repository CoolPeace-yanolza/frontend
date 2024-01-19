import { useRef, useState } from 'react';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import toggleOnIcon from '@assets/icons/ic-couponlist-toggleOn.svg';
import toggleOffIcon from '@assets/icons/ic-couponlist-toggleOff.svg';
import rightIcon from '@assets/icons/ic-couponlist-right.svg';
import deleteIcon from '@assets/icons/ic-couponlist-delete.svg';
import { ToggleStyleProps } from '@/types/couponList';
import { useOutsideClick } from '@hooks/index';

const CouponExpose = () => {
  const [isToggle, setIsToggle] = useState(true);
  const [isRoomList, setIsRoomList] = useState(false);
  const roomListRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleRoomList = () => {
    setIsRoomList(!isRoomList);
  };

  useOutsideClick(roomListRef, () => setIsRoomList(false));

  return (
    <CouponContainer $isToggle={isToggle}>
      <CouponHeaderContainer>
        <CouponHeader>
          <CouponTitle>2024 신년행사</CouponTitle>
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
            <ContentRoom onClick={handleRoomList}>
              <div>일부 객실</div>
              <img
                src={rightIcon}
                alt="오른쪽 화살표"
              />
            </ContentRoom>
            {isRoomList && (
              <RoomList ref={roomListRef}>
                <RoomListTitleWrap>
                  <RoomListTitle>쿠폰 적용 객실</RoomListTitle>
                  <img
                    onClick={handleRoomList}
                    src={deleteIcon}
                    alt="리스트 닫기 아이콘"
                  />
                </RoomListTitleWrap>
                <RoomListItem>
                  <ul>
                    <li>스탠다드 더블</li>
                    <li>스탠다드 트윈</li>
                    <li>프리미엄 스위트 더블 디럭스</li>
                    <li>프리미엄 스위트 더블 디럭스</li>
                    <li>프리미엄 스위트 더블 디럭스</li>
                  </ul>
                </RoomListItem>
              </RoomList>
            )}

            <ContentValue></ContentValue>
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

export default CouponExpose;

const CouponContainer = styled.div<ToggleStyleProps>`
  position: relative;

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
const ContentRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-bottom: 3px;
  }
  div {
    margin-right: 3px;
    border-bottom: 1px solid #757676;

    color: #757676;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }
`;

const RoomList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  width: 188px;
  height: 204px;

  margin-top: 150px;
  border-radius: 18px;
  text-align: center;

  background: #415574;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #415574;
  }
`;

const RoomListTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px;
  padding: 8px;
  border-bottom: 1px solid #cdcfd0;

  img {
    cursor: pointer;
  }
`;

const RoomListTitle = styled.div`
  margin-left: 35px;

  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  color: ${theme.colors.white};
`;

const RoomListItem = styled.div`
  max-height: 125px;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; // 세로 스크롤만 허용

  color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;

  li {
    max-width: 130px;

    overflow: hidden;
    overflow-y: scroll;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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