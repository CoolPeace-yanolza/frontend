import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputContainer, ErrorMessage } from '@components/Register/common';
import Calendar from './Calendar';
import RegisterCompleteModal from './RegisterCompleteModal';
import { CalendarWrapperStyleProps } from '@/types/register';
import { registerInputState, registerValidState } from '@recoil/index';

const FourthStep = () => {
  const input = useRecoilValue(registerInputState);
  const isValid = useRecoilValue(registerValidState);

  return (
    <>
      {input.isModalOpen &&
        ReactDOM.createPortal(
          <RegisterCompleteModal />,
          document.getElementById('modal-root') as HTMLElement
        )}
      <InputContainer title="쿠폰의 노출 기간을 선택해주세요.">
        <ContentContainer>
          <Description>
            쿠폰의 유효기간은 다운로드 일자부터 14일 자정까지 입니다.
          </Description>
          <CalendarWrapper
            $isSelected={input.startDate || input.endDate ? true : false}
          >
            <Calendar />
          </CalendarWrapper>
        </ContentContainer>
        {!isValid.isDateValid && (
          <ErrorMessage>쿠폰 노출 기간 설정은 필수입니다.</ErrorMessage>
        )}
        {!isValid.endDateAfterStartDate && (
          <ErrorMessage>
            노출 종료일은 노출 시작일 이후 날짜여야 합니다.
          </ErrorMessage>
        )}
      </InputContainer>
    </>
  );
};

export default FourthStep;

const ContentContainer = styled.div`
  margin-top: 11px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const CalendarWrapper = styled.button<CalendarWrapperStyleProps>`
  width: 336px;
  height: 45px;

  margin-top: 20px;
  padding: 7px 23px;
  border: ${props =>
    props.$isSelected
      ? `2px solid ${theme.colors.hover}`
      : '1px solid #979c9e'};
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  color: #979c9e;
  font-family: 'Noto Sans KR';
  font-size: 15px;

  cursor: pointer;
`;
