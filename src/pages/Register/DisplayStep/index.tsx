import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep
} from '@components/Register/Steps';
import { DisplayStepProps } from '@/types/register';

const DisplayStep = ({ currentStep }: DisplayStepProps) => {
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

export default DisplayStep;
