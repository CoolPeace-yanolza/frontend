import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  StepperControllerProps,
  PreviousButtonStyleProps,
  NextButtonStyleProps
} from '@/types/register';
import {
  registerInputState,
  registerValidState,
  previewState
} from '@recoil/index';
import {
  showFirstStepValidationMessage,
  showSecondStepValidationMessage,
  showThirdStepValidationMessage,
  showFourthStepValidationMessage,
  handleStepLessThan3
} from '@utils/index';

const StepperController = ({
  currentStep,
  isFilled,
  onButtonClick
}: StepperControllerProps) => {
  const input = useRecoilValue(registerInputState);
  const setIsValid = useSetRecoilState(registerValidState);
  const setPreview = useSetRecoilState(previewState);

  const handlePreviousButton = () => {
    if (currentStep > 0) {
      onButtonClick(prev => prev - 1);
    }
  };

  const handleNextButton = () => {
    switch (currentStep) {
      case 0:
        showFirstStepValidationMessage(input, setIsValid);
        break;
      case 1:
        showSecondStepValidationMessage(input, setIsValid);
        break;
      case 2:
        showThirdStepValidationMessage(input, setPreview);
        break;
      case 3:
        showFourthStepValidationMessage(input, setIsValid);
        break;
      default:
        break;
    }

    if (currentStep < 3) {
      handleStepLessThan3(currentStep, input, isFilled, onButtonClick);
    }
  };

  return (
    <InnerControllerContainer>
      <PreviousButton
        $currentStep={currentStep}
        onClick={handlePreviousButton}
      >
        이전
      </PreviousButton>
      <NextButton
        $isFilled={currentStep === 2 ? true : isFilled}
        onClick={handleNextButton}
      >
        {currentStep === 3 ? '등록' : '다음'}
      </NextButton>
    </InnerControllerContainer>
  );
};

export default StepperController;

const InnerControllerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 27px;
`;

const PreviousButton = styled.button<PreviousButtonStyleProps>`
  width: 111px;
  height: 39px;

  border: 1px solid ${theme.colors.hover};
  border-radius: 8px;

  display: ${props => (!props.$currentStep ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  color: ${theme.colors.hover};
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;

  background: #fff;

  cursor: pointer;
`;

const NextButton = styled.button<NextButtonStyleProps>`
  width: 167px;
  height: 39px;

  border: none;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;

  background: ${props =>
    props.$isFilled ? `${theme.colors.hover}` : '#cdcfd0'};

  cursor: ${props => (props.$isFilled ? 'pointer' : 'default')};
`;
