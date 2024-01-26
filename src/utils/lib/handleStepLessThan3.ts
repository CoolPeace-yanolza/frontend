import { registerInputAtom } from '@/types/register';

export const handleStepLessThan3 = (
  currentStep: number,
  input: registerInputAtom,
  isFilled: boolean,
  onButtonClick: React.Dispatch<React.SetStateAction<number>>
) => {
  if (
    currentStep === 0 &&
    input.discountType === '정액 할인' &&
    Number(input.discountFlat) % 1000
  ) {
    return;
  } else if (currentStep === 2 || isFilled) {
    onButtonClick(prev => prev + 1);
  }
};
