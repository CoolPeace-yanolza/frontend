import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  StepperControllerProps,
  PreviousButtonStyleProps,
  NextButtonStyleProps
} from '@/types/register';
import { registerInputState, registerValidState } from '@recoil/index';

const StepperController = ({
  currentStep,
  isFilled,
  onButtonClick
}: StepperControllerProps) => {
  const input = useRecoilValue(registerInputState);
  const setIsValid = useSetRecoilState(registerValidState);

  const handlePreviousButton = () => {
    if (currentStep > 0) {
      onButtonClick(prev => prev - 1);
    }
  };

  const handleNextButton = () => {
    if (currentStep === 0) {
      !input.title && setIsValid(prev => ({ ...prev, isTitleValid: false }));
      !input.customerType &&
        setIsValid(prev => ({ ...prev, isCustomerTypeValid: false }));
      !input.discountType &&
        setIsValid(prev => ({ ...prev, isDiscountTypeValid: false }));
      if (input.discountType === '정액 할인') {
        if (input.discountFlat === '' || Number(input.discountFlat) === 0) {
          setIsValid(prev => ({ ...prev, isDiscountFlatValid: false }));
        } else if (Number(input.discountFlat) % 1000) {
          setIsValid(prev => ({ ...prev, isThousands: false }));
        }
      } else if (input.discountType === '정률 할인') {
        if (
          input.discountFlatRate === '' ||
          Number(input.discountFlatRate) === 0
        ) {
          setIsValid(prev => ({ ...prev, isDiscountFlatRateValid: false }));
        }
      }
    }

    if (currentStep === 1) {
      !input.roomType.length &&
        setIsValid(prev => ({ ...prev, isRoomTypeValid: false }));
      !input.toAllRooms &&
        setIsValid(prev => ({ ...prev, isToAllRoomsValid: false }));
    }

    if (currentStep === 3) {
      if (!input.startDate || !input.endDate) {
        setIsValid(prev => ({ ...prev, isDateValid: false }));
      } else if (input.startDate > input.endDate) {
        setIsValid(prev => ({ ...prev, endDateAfterStartDate: false }));
      }
    }

    if (currentStep < 3) {
      if (
        currentStep === 0 &&
        input.discountType === '정액 할인' &&
        Number(input.discountFlat) % 1000
      ) {
        return;
      } else if (currentStep === 2 || isFilled) {
        onButtonClick(prev => prev + 1);
      }
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

  cursor: pointer;
`;
