import { useState } from 'react';
import styled from '@emotion/styled';

import { ErrorModal, Footer } from '@components/common';
import { LoginForm, LoginTitle } from '@components/Login';
import { ERROR_MODAL_MESSAGE } from 'src/constants';

const Login = () => {
  const [modalContent, setModalContent] = useState(ERROR_MODAL_MESSAGE.LOGIN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(prev => !prev);
  const handleModalOpen = (text: string) => {
    setModalContent(prev => ({ ...prev, text }));
    setIsModalOpen(true);
  };

  return (
    <WhiteBackground>
      <Container>
        <Content>
          <LoginTitle />
          <LoginForm handleModalOpen={handleModalOpen} />
        </Content>
      </Container>
      <Footer />
      {isModalOpen && (
        <ErrorModal
          modalContent={modalContent}
          ButtonFunc={handleModalClose}
        />
      )}
    </WhiteBackground>
  );
};

export default Login;

const WhiteBackground = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #fff;
`;

const Container = styled.div`
  --footer-height: 100px;

  max-width: 524px;
  height: calc(100% - var(--footer-height));

  margin: auto;

  @media screen and (max-width: 649px) {
    min-width: 295px;
    max-width: 80%;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  margin: 50px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 65px;
`;
