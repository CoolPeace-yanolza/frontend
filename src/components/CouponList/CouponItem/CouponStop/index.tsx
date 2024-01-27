import { useRef, useState } from 'react';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import toggleOnIcon from '@assets/icons/ic-couponlist-toggleOn.svg';
import toggleOffIcon from '@assets/icons/ic-couponlist-toggleOff.svg';
import rightIcon from '@assets/icons/ic-couponlist-right.svg';
import deleteIcon from '@assets/icons/ic-couponlist-delete.svg';
import {
  CouponListProps,
  RoomListProps,
  ToggleStyleProps
} from '@/types/couponList';
import { useOutsideClick, useToggleChange } from '@hooks/index';
import { couponCondition } from '@utils/lib/couponCondition';
import { useToast } from '@components/common/ToastContext';
import couponRoomType from '@utils/lib/couponRoomType';
import { useUpdateRoomListPosition } from '@utils/lib/roomListPosition';

const CouponStop = ({ couponInfo }: CouponListProps) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isShowRoomList, setIsShowRoomList] = useState(false);
  const roomListRef = useRef<HTMLDivElement>(null);
  const { mutateAsync } = useToggleChange();
  const { showToast } = useToast();
  const roomListStyleRef = useRef<HTMLDivElement>(null);
  const [isBottom, setIsBottom] = useState(false); // RoomList가 하단에 닿았는지 여부를 나타내는 상태

  useOutsideClick(roomListRef, () => setIsShowRoomList(false));

  const handleRoomList = () => {
    setIsShowRoomList(!isShowRoomList);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
    toggleUpdate();
  };

  const filterTitle =
    couponInfo.title.length > 10
      ? `${couponInfo.title.substring(0, 10)}...`
      : couponInfo.title;

  const toggleUpdate = async () => {
    try {
      await mutateAsync({
        coupon_number: couponInfo.coupon_number,
        coupon_status: '노출 ON'
      });
      console.log(couponInfo.coupon_number);

      showToast(
        <ToastWrap>
          <div>
            {filterTitle} 쿠폰이 <br />
            노출되었습니다.
          </div>
          <p onClick={retryToggleUpdate}>실행 취소</p>
        </ToastWrap>,
        2000
      );
    } catch (error) {
      console.log(error);
    }
  };

  const retryToggleUpdate = async () => {
    try {
      setIsToggle(!isToggle);
      await mutateAsync({
        coupon_number: couponInfo.coupon_number,
        coupon_status: '노출 OFF'
      });
      showToast(
        <ToastText>
          {filterTitle} 쿠폰의 노출이 <br />
          중단되었습니다.
        </ToastText>,
        2000
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 객실 리스트 스크롤에 따라 위치 조정
  useUpdateRoomListPosition({ isShowRoomList, roomListStyleRef, setIsBottom });

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
        <CouponCustomer>{couponInfo.coupon_concat_title}</CouponCustomer>
      </CouponHeaderContainer>
      <CouponMain>
        <CountWrap>
          <CountText>다운로드</CountText>
          <CountNumber>{couponInfo.download_count}</CountNumber>
        </CountWrap>
        <CountWrap>
          <CountText>사용완료</CountText>
          <CountNumber>{couponInfo.use_count}</CountNumber>
        </CountWrap>
        <div>
          <ContentWrap>
            <ContentTitle>가격</ContentTitle>
            <ContentValue>
              {new Intl.NumberFormat().format(
                couponInfo.minimum_reservation_price as number
              )}
              원 이상
            </ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>일정</ContentTitle>
            <ContentValue>
              {couponRoomType(couponInfo.coupon_room_types).join(', ')},
              <span>
                {couponCondition(
                  couponInfo.coupon_use_condition_days,
                  couponInfo.coupon_use_condition_day_of_week
                )}
              </span>
            </ContentValue>
          </ContentWrap>
          <ContentWrap>
            <ContentTitle>객실</ContentTitle>
            {couponInfo.register_room_numbers.length === 0 ? (
              <ContentValue>전체</ContentValue>
            ) : (
              <>
                <ContentRoom
                  ref={roomListRef}
                  onClick={handleRoomList}
                >
                  <div>일부 객실</div>
                  <img
                    src={rightIcon}
                    alt="오른쪽 화살표"
                  />
                </ContentRoom>
                {isShowRoomList && (
                  <RoomList
                    $isBottom={isBottom}
                    ref={roomListStyleRef}
                  >
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
                        {couponInfo.register_room_numbers.map((room, index) => (
                          <li key={index}>
                            {room.length > 10
                              ? `${room.substring(0, 10)}...`
                              : room}
                          </li>
                        ))}
                      </ul>
                    </RoomListItem>
                  </RoomList>
                )}
              </>
            )}
          </ContentWrap>
        </div>
      </CouponMain>
      <DateContainer>
        <ExposeDateWrap>
          <ExposeDateTitle>노출기간</ExposeDateTitle>
          <ExposeValue>
            {couponInfo.exposure_start_date} ~ {couponInfo.exposure_end_date}
          </ExposeValue>
        </ExposeDateWrap>
        <ExposeDateWrap>
          <RegisterDateTitle>등록일</RegisterDateTitle>
          <RegisterDateValue>{couponInfo.created_date}</RegisterDateValue>
        </ExposeDateWrap>
      </DateContainer>
    </CouponContainer>
  );
};

export default CouponStop;

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

const ContentWrap = styled.div`
  margin: 8px 4px;

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

  span {
    margin-left: 3px;
  }
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

const ContentRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  div {
    margin-right: 3px;
    padding: 2px 0px;
    border-bottom: 1px solid #757676;

    color: #757676;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }
`;

const RoomList = styled.div<RoomListProps>`
  position: absolute;
  top: ${({ $isBottom }) => ($isBottom ? 'auto' : '0')};
  bottom: ${({ $isBottom }) => ($isBottom ? '0' : 'auto')};
  right: 0;
  z-index: 50;
  transform: ${({ $isBottom }) => ($isBottom ? 'translateY(-100%)' : 'none')};

  width: 188px;
  height: 204px;

  margin-top: ${({ $isBottom }) => ($isBottom ? 'auto' : '150px')};
  margin-bottom: ${({ $isBottom }) => ($isBottom ? '-110px' : '150px')};
  border-radius: 18px;

  text-align: center;
  background: #415574;

  &::before {
    content: '';
    position: absolute;
    top: ${({ $isBottom }) => ($isBottom ? 'auto' : '-10px')};
    bottom: ${({ $isBottom }) => ($isBottom ? '0px' : 'auto')};
    left: 50%;
    transform: translateX(-50%)
      ${({ $isBottom }) => ($isBottom ? 'translateY(100%)' : '')};

    width: 0;
    height: 0;

    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: ${({ $isBottom }) =>
      $isBottom ? '10px solid #415574' : 'none'};
    border-bottom: ${({ $isBottom }) =>
      $isBottom ? 'none' : '10px solid #415574'};
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

const ToastWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToastText = styled.div`
  text-align: center;
`;
