import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import {
  Stepper,
  StepperController,
  StepTitle,
  Preview
} from '@components/Register';
import DisplayStep from './DisplayStep';
import { useStepValidation, useGetRoomList } from '@hooks/index';
import { getStepperConfig } from '@utils/index';
import { headerAccommodationState, registerInputState } from '@recoil/index';

const Register = () => {
  const header = useRecoilValue(headerAccommodationState);
  const setInput = useSetRecoilState(registerInputState);

  const [currentStep, setCurrentStep] = useState(0);

  const { isFilled } = useStepValidation(currentStep);
  const steps = getStepperConfig();

  const { data } = useGetRoomList(header.id);
  const list = data.room_responses.map(room => ({
    id: room.id,
    roomNumber: room.room_number,
    roomType: room.room_type,
    price: room.price
  }));

  useEffect(() => {
    setInput(prev => ({ ...prev, rooms: list }));
  }, []);

  return (
    <Background>
      <RegisterContainer>
        <TitleContainer>
          <Title>신규 쿠폰 등록하기</Title>
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
        </TitleContainer>
        <ContentContainer>
          <InnerContentContainer>
            <SectionContainer>
              <LeftSection>
                <StepTitle
                  steps={steps}
                  currentStep={currentStep}
                />
                <DisplayStep currentStep={currentStep} />
              </LeftSection>
              <RightSection>
                <Preview />
                <StepperController
                  currentStep={currentStep}
                  isFilled={isFilled}
                  onButtonClick={setCurrentStep}
                />
              </RightSection>
            </SectionContainer>
          </InnerContentContainer>
        </ContentContainer>
      </RegisterContainer>
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

const RegisterContainer = styled.div`
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

const TitleContainer = styled.div`
  width: 100%;
  height: 20%;

  padding: 27px 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25%;

  border-radius: 0px 60px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
  backdrop-filter: blur(71px);
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: -0.78px;
`;

const ContentContainer = styled.div`
  position: relative;

  width: 100%;
  height: 80%;
`;

const InnerContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 90%;
  height: 84%;

  overflow: auto;
`;

const SectionContainer = styled.div`
  position: relative;

  width: 100%;

  display: inline-block;
`;

const LeftSection = styled.div`
  width: 47%;

  display: inline-block;
`;

const RightSection = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;

  width: 47%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
