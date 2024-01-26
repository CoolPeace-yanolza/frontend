export const getStepperConfig = (isCompleted: {
  isFirstStepCompleted: boolean;
  isSecondStepCompleted: boolean;
  isThirdStepCompleted: boolean;
  isFourthStepCompleted: boolean;
}) => [
  {
    title: '정보 입력',
    isCompleted: isCompleted.isFirstStepCompleted
  },
  {
    title: '유형 선택',
    isCompleted: isCompleted.isSecondStepCompleted
  },
  {
    title: '조건 선택',
    isCompleted: isCompleted.isThirdStepCompleted
  },
  {
    title: '노출 기간 선택',
    isCompleted: isCompleted.isFourthStepCompleted
  }
];
