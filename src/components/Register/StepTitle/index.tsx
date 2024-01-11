import styled from '@emotion/styled';
import theme from '@styles/theme';

import { StepTitleProps } from '@/types/register';

const StepTitle = ({ steps, currentStep }: StepTitleProps) => {
  return (
    <StepTitleContainer>
      <StepTitleWrapper>
        {`${currentStep + 1}.  ${steps[currentStep].title}`}
        {!currentStep && (
          <PreviousCoupon>이전 쿠폰 정보 불러오기</PreviousCoupon>
        )}
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
  height: 100%;

  display: grid;

  font-size: 26px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: -0.78px;
`;

const StepTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PreviousCoupon = styled.button`
  height: 23px;

  margin-top: 5px;
  padding: 0px;
  border: none;

  color: ${theme.colors.pink500};
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-position: under;

  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const Description = styled.span`
  margin-top: 10px;

  color: #6c7072;
  font-size: 13px;
  font-weight: 700;
  line-height: 150%;
`;
