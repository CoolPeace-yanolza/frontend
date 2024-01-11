export type StepperProps = {
  steps: {
    title: string;
    isCurrent: boolean;
    isCompleted: boolean;
  }[];
  currentStep: number;
};

export type StepperStyleProps = {
  src: string;
  $isLastStep: number;
};

export type NumberProps = Pick<StepperStyleProps, 'src'>;
export type LineProps = Pick<StepperStyleProps, '$isLastStep'>;

export interface StepperControllerProps {
  currentStep: number;
  onButtonClick: React.Dispatch<React.SetStateAction<number>>;
}

export type StepTitleProps = {
  steps: {
    title: string;
    isCurrent: boolean;
    isCompleted: boolean;
  }[];
  currentStep: number;
};
