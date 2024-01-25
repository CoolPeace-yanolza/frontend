import { useState } from 'react';
import styled from '@emotion/styled';

import logo from '@assets/icons/ic-logo.svg';
import { ErrorModal, Footer } from '@components/common';
import { SignUpForm, SignUpTitle } from '@components/SignUp';
import { ERROR_MODAL_MESSAGE } from 'src/constants';

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

  return (
    <WhiteBackground>
      <WithoutFooterSection>
        <Logo>
          <LogoIcon
            src={logo}
            alt="사장님 비서ya"
          />
        </Logo>
        <Container>
          <Content>
            <SignUpTitle />
            <SignUpForm handleModalOpen={handleModalOpen} />
          </Content>
        </Container>
      </WithoutFooterSection>
      <Footer />
      {isModalOpen && (
        <ErrorModal
          modalContent={ERROR_MODAL_MESSAGE.SIGNUP}
          ButtonFunc={handleModalClose}
        />
      )}
    </WhiteBackground>
  );
};

export default SignUp;

const WhiteBackground = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  background-color: #fff;

  @media screen and (max-width: 649px) {
    gap: 30px;
  }
`;

const WithoutFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 67px;

  @media screen and (max-width: 649px) {
    gap: 40px;
  }
`;

const Logo = styled.div`
  height: 36px;

  margin-top: 48px;
  margin-left: 57px;

  @media screen and (max-width: 649px) {
    height: 30px;

    margin-top: 26px;
    margin-left: 26px;
  }
`;

const LogoIcon = styled.img`
  width: 172.8px;
  height: 100%;

  @media screen and (max-width: 649px) {
    width: 142px;
  }
`;

const Container = styled.div`
  --logo-height: 36px;
  --footer-height: 100px;

  max-width: 524px;
  height: calc(100% - var(--logo-height) - var(--footer-height));

  margin: auto;

  @media screen and (max-width: 649px) {
    --logo-height: 30px;

    min-width: 295px;
    max-width: 80%;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
