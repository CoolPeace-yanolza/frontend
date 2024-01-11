import { useState } from 'react';
import styled from '@emotion/styled';

import { Stepper, StepperController } from '@components/Register';
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep
} from '@components/Register/Steps';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const displayStep = (currentStep: number) => {
    switch (currentStep) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
        return <FourthStep />;
      default:
        throw new Error(`Unsupported step: ${currentStep}`);
    }
  };

  return (
    <Background>
      <Container>
        <TitleWrapper>
          <Title>신규 쿠폰 등록하기</Title>
          <Stepper currentStep={currentStep} />
        </TitleWrapper>
        {displayStep(currentStep)}
        <StepperController
          currentStep={currentStep}
          onButtonClick={setCurrentStep}
        />
      </Container>
    </Background>
  );
};

export default Register;

const Background = styled.div`
  width: 100%;
  height: 100%;

  padding: 2.5%;
  border-radius: 20px;

  background: linear-gradient(
    115deg,
    #fff 0%,
    rgba(163, 191, 255, 0.1) 49.57%,
    #fff 100%
  );
`;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  border-radius: 0px 60px;

  background: rgba(255, 255, 255, 0.8);
  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
  backdrop-filter: blur(71px);
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 25%;

  padding: 27px 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  border-radius: 0px 60px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
  backdrop-filter: blur(71px);
`;

const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.78px;
`;
