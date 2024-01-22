import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { StepperControllerProps } from '@/types/register';
import { registerInputState, registerValidState } from '@recoil/index';

const StepperController = ({
  currentStep,
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
    if (currentStep < 3) {
      onButtonClick(prev => prev + 1);
    }

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
        } else if (input.hasLimit) {
          if (
            input.maximumDiscount === '' ||
            Number(input.maximumDiscount) === 0
          ) {
            setIsValid(prev => ({ ...prev, isMaximumDiscountValid: false }));
          } else if (Number(input.maximumDiscount) % 1000) {
            setIsValid(prev => ({ ...prev, isThousands: false }));
          }
        }
      }
    }

    if (currentStep === 1) {
      !input.roomType.length &&
        setIsValid(prev => ({ ...prev, isRoomTypeValid: false }));
      !input.isAllRoom &&
        setIsValid(prev => ({ ...prev, isAllRoomValid: false }));
    }
  };

  return (
    <InnerControllerContainer>
      <ControllerButton onClick={handlePreviousButton}>이전</ControllerButton>
      <ControllerButton onClick={handleNextButton}>다음</ControllerButton>
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
