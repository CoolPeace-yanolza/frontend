import styled from '@emotion/styled';

import theme from '@styles/theme';
import { StepTitleProps } from '@/types/register';

const StepTitle = ({ steps, currentStep }: StepTitleProps) => {
  return (
    <StepTitleContainer>
      <StepTitleWrapper>
        {`${currentStep + 1}. ${steps[currentStep].title}`}
        {currentStep === 2 && (
          <Description>
            쿠폰에 대한 사용 조건을 설정해 주세요! (복수선택 가능)
          </Description>
        )}
      </StepTitleWrapper>
    </StepTitleContainer>
  );
};

export default StepTitle;

const StepTitleContainer = styled.div`
  width: 100%;
  height: 60px;

  font-size: 24px;
  font-weight: 600;
  line-height: 31px;
  letter-spacing: -0.78px;

  ${theme.response.tablet} {
    font-size: 3vw;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const StepTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.span`
  margin-top: 10px;

  color: #6c7072;
  font-size: 13px;
  letter-spacing: 0.1px;
  line-height: 150%;
`;
