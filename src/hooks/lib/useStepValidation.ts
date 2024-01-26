import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { registerInputState } from '@recoil/index';

const useStepValidation = (currentStep: number) => {
  const input = useRecoilValue(registerInputState);

  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    let submitRequirements = false;

    switch (currentStep) {
      case 0:
        submitRequirements =
          !!input.title &&
          !!input.customerType &&
          ((input.discountType === '정액 할인' && !!input.discountFlat) ||
            (input.discountType === '정률 할인' && !!input.discountFlatRate));
        break;
      case 1:
        submitRequirements = !!input.roomType.length && !!input.toAllRooms;
        break;
      case 2:
        submitRequirements =
          !!input.minimumPrice &&
          (input.whenToUse === '하루만' ? !!input.day : !!input.whenToUse);
        break;
      case 3:
        submitRequirements = !!input.startDate && !!input.endDate;
        break;
      default:
        break;
    }

    setIsFilled(submitRequirements);
  }, [currentStep, input]);

  return { isFilled };
};

export default useStepValidation;
