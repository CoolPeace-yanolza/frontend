import React from 'react';
import styled from '@emotion/styled';

import { Footer } from '@components/common';
import { LoginForm, LoginTitle } from '@components/Login';

const Login = () => {
  return (
    <WhiteBackground>
      <Container>
        <Content>
          <LoginTitle />
          <LoginForm />
        </Content>
      </Container>
      <Footer />
      {/* HACK: 모달 제작 후 오류 메세지 표시 예정 */}
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
  max-width: 524px;
  height: calc(100% - 100px);

  margin: auto;
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
