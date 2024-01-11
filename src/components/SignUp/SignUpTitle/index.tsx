import React from 'react';
import styled from '@emotion/styled';

const SignUpTitle = () => {
  return (
    <TitleWrapper>
      <Title>회원가입</Title>
      <Description>
        야놀자가 준비한 사장님 비서ya만의 혜택을 받아보세요.
      </Description>
    </TitleWrapper>
  );
};

export default SignUpTitle;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: #202325;
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.78px;
`;

const Description = styled.p`
  color: #979c9e;
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
`;
