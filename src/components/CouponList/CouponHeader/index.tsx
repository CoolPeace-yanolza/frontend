import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import theme from '@styles/theme';

const CouponHeader = () => {
  const navigate = useNavigate();

  const handleCouponRegister = () => {
    navigate('/coupons/register');
  };

  return (
    <CouponHeaderContainer>
      <CouponHeaderWrapper>
        <CouponTitle>쿠폰 조회</CouponTitle>
        <CouponDescription>
          보다 더 편리한 쿠폰 관리를 도와드립니다.
        </CouponDescription>
      </CouponHeaderWrapper>
      <CouponRegisterButton onClick={handleCouponRegister}>
        쿠폰 등록하기
      </CouponRegisterButton>
    </CouponHeaderContainer>
  );
};

export default CouponHeader;

const CouponHeaderContainer = styled.div`
  margin: 56px 50px 0px;
  border-bottom: 1px solid #dde1e6;

  display: flex;
  justify-content: space-between;
  align-items: center;
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

  margin-bottom: 10px;
  padding: 14px 20px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  color: ${theme.colors.white};
  background: #ff3478;
  cursor: pointer;
`;
