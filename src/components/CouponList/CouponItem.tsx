import React from 'react';
import exposeIcon from '@assets/icons/CouponList/ic_expose.svg';
import toggleOnIcon from '@assets/icons/CouponList/ic_toggle_on.svg';
import styled from '@emotion/styled';

const CouponItem = () => {
  return (
    <div>
      <CouponHeader>
        <ExposeContainer>
          <ExposeWrap>
            <img
              src={exposeIcon}
              alt="exposeIcon"
            />
            <ExposeText>현재 노출 중</ExposeText>
          </ExposeWrap>
          <ToggleWrap>
            <ToggleText>ON</ToggleText>
            <img
              src={toggleOnIcon}
              alt="toggleOnIcon"
            />
          </ToggleWrap>
        </ExposeContainer>
        <RoomWrap>
          <ApplyRoom>적용 객실</ApplyRoom>
          <RoomButton>전체</RoomButton>
        </RoomWrap>
      </CouponHeader>
    </div>
  );
};

export default CouponItem;

const CouponHeader = styled.div`
  width: 218px;
  height: 77px;

  border-radius: 10.608px 10.608px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: var(
    --gradient,
    linear-gradient(91deg, #ff3478 1.39%, #ff83ad 98.63%)
  );
`;

const ExposeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
`;

const ExposeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExposeText = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 12px;
`;

const ToggleWrap = styled.div`
  width: 48.229px;
  height: 23.526px;

  border-radius: 17.68px;
  border: 1px solid #e3e5e5;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3px;
  padding-left: 5px;

  background-color: ${props => props.theme.colors.white};
`;

const ToggleText = styled.div`
  font-size: 10px;

  color: ${props => props.theme.colors.pink500};
`;

const RoomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApplyRoom = styled.div`
  position: relative;

  width: 194px;
  height: 31px;

  padding-top: 12px;
  padding-left: 10px;
  border-radius: 8px;

  background-color: ${props => props.theme.colors.white};

  font-size: 10px;
  color: #404446;
`;

const RoomButton = styled.button`
  position: absolute;

  width: 113px;
  height: 23px;

  margin-left: 76px;
  border-radius: 12px;
  border: 1px solid #ffadc8;

  background-color: transparent;

  color: ${props => props.theme.colors.pink500};
  font-size: 11px;
`;
