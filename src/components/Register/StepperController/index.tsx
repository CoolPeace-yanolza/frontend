import styled from '@emotion/styled';

import { StepperControllerProps } from '@/types/register';

const StepperController = ({
  currentStep,
  onButtonClick
}: StepperControllerProps) => {
  const handlePreviousButton = () => {
    if (currentStep > 0) {
      onButtonClick(prev => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentStep < 3) {
      onButtonClick(prev => prev + 1);
    }
  };

  return (
    <ButtonContainer>
      <ControllerButton onClick={handlePreviousButton}>이전</ControllerButton>
      <ControllerButton onClick={handleNextButton}>다음</ControllerButton>
    </ButtonContainer>
  );
};

export default StepperController;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 33px;
  right: 65px;

  display: flex;
  gap: 27px;
`;

const ControllerButton = styled.button`
  width: 63px;
  height: 41px;

  padding: 13px 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  border: none;
  border-radius: 8px;
  background: #1a2849;
  cursor: pointer;

  color: #fff;
  font-size: 15px;
  line-height: 25px;
`;
