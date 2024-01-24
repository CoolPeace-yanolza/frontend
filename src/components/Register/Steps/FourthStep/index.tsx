import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputContainer, ErrorMessage } from '@components/Register/common';
import Calendar from './Calendar';
import { CalendarWrapperStyleProps } from '@/types/register';
import { registerValidState } from '@recoil/index';

const FourthStep = () => {
  const isValid = useRecoilValue(registerValidState);

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selected, setSelected] = useState(false);

  return (
    <InputContainer title="쿠폰의 노출 기간을 선택해주세요.">
      <ContentContainer>
        <Description>
          쿠폰의 유효기간은 다운로드 일자부터 14일 자정까지 입니다.
        </Description>
        <CalendarWrapper $isSelected={selected}>
          <Calendar
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setSelected={setSelected}
          />
        </CalendarWrapper>
      </ContentContainer>
      {!isValid.isDateValid && (
        <ErrorMessage>쿠폰 노출 기간 설정은 필수입니다.</ErrorMessage>
      )}
    </InputContainer>
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
