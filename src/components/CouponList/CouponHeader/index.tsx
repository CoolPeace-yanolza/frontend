import styled from '@emotion/styled';
import React from 'react';

const CouponHeader = () => {
  return (
    <CouponHeaderContainer>
      <CouponHeaderWrapper>
        <CouponTitle>쿠폰 조회</CouponTitle>
        <CouponDescription>
          보다 더 편리한 쿠폰 관리를 도와드립니다.
        </CouponDescription>
      </CouponHeaderWrapper>
      <CouponRegisterButton>쿠폰 등록하기</CouponRegisterButton>
    </CouponHeaderContainer>
  );
};

export default CouponHeader;

const CouponHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 56px 34.5px 0px;

  border-bottom: 1px solid #dde1e6;
`;

const CouponHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CouponTitle = styled.div`
  color: #090a0a;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
`;

const CouponDescription = styled.div`
  margin-left: 10px;

  color: #808080;
  font-size: 18px;
`;

const CouponRegisterButton = styled.div`
  width: 175px;
  height: 44px;

  display: flex;
  padding: 14px 20px;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  margin-bottom: 10px;

  color: ${props => props.theme.colors.white};
  border-radius: 12px;
  background: #ff3478;
  cursor: pointer;
`;
