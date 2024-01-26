import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { Backdrop } from '@components/common';
import complete from '@assets/icons/ic-register-complete.svg';
import { registerInputState, previewState } from '@recoil/index';

const RegisterCompleteModal = () => {
  const navigate = useNavigate();
  const resetInput = useResetRecoilState(registerInputState);
  const resetPreview = useResetRecoilState(previewState);

  const handleCheckButton = () => {
    navigate('/coupons');
    resetInput();
    resetPreview();
  };

  return (
    <Backdrop>
      <Container>
        <CompleteIcon
          src={complete}
          alt="등록 완료 아이콘"
        />
        <Description>쿠폰이 등록되었습니다.</Description>
        <CheckCoupons onClick={handleCheckButton}>
          쿠폰 확인하러 가기
        </CheckCoupons>
        <RegisterNewCoupon>쿠폰 추가 등록하기</RegisterNewCoupon>
      </Container>
    </Backdrop>
  );
};

export default RegisterCompleteModal;

const Container = styled.div`
  width: 643px;
  height: 309px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
`;

const CompleteIcon = styled.img`
  width: 45px;
  height: 45px;
`;

const Description = styled.div`
  margin-top: 15px;

  font-size: 18px;
  font-weight: 600;
`;

const CheckCoupons = styled.button`
  width: 324px;
  height: 47px;

  margin-top: 40px;
  border: none;
  border-radius: 12px;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 15px;

  background: ${theme.colors.hover};

  cursor: pointer;
`;

const RegisterNewCoupon = styled.button`
  margin-top: 10px;
  border: none;

  color: #757676;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  text-decoration: underline;
  text-underline-position: under;

  background: transparent;

  cursor: pointer;
`;
