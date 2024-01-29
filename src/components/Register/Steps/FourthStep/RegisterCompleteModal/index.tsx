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

  const handleRegisterButton = () => {
    resetInput();
    resetPreview();
    location.reload();
  };

  return (
    <Backdrop>
      <Container>
        <CompleteIcon
          src={complete}
          alt="등록 완료 아이콘"
        />
        <Description>쿠폰이 등록되었습니다.</Description>
        <ButtonContainer>
          <CheckCoupons onClick={handleCheckButton}>
            쿠폰 확인하러 가기
          </CheckCoupons>
          <RegisterNewCoupon onClick={handleRegisterButton}>
            쿠폰 추가 등록하기
          </RegisterNewCoupon>
        </ButtonContainer>
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

  ${theme.response.tablet} {
    width: 336px;
    height: 210px;
  }
`;

const CompleteIcon = styled.img`
  width: 45px;
  height: 45px;

  ${theme.response.tablet} {
    width: 38px;
    height: 38px;
  }
`;

const Description = styled.div`
  margin: 15px 0px 40px;

  font-size: 18px;
  font-weight: 600;

  ${theme.response.tablet} {
    font-size: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

const CheckCoupons = styled.button`
  width: 324px;
  height: 47px;

  border: none;
  border-radius: 12px;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 15px;

  background: ${theme.colors.hover};

  cursor: pointer;

  ${theme.response.tablet} {
    width: 130px;
    height: 38px;

    border-radius: 10px;

    font-size: 12px;

    background: #b1b1b1;
  }
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

  ${theme.response.tablet} {
    width: 130px;
    height: 38px;

    margin-top: 0px;
    border-radius: 10px;

    color: #fff;
    font-size: 12px;
    text-decoration: none;

    background: ${theme.colors.hover};
  }
`;
