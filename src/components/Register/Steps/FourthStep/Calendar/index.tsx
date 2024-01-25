import { forwardRef, ForwardedRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { CustomInputProps } from '@/types/register';
import notSelected from '@assets/icons/ic-register-calendar.svg';
import selected from '@assets/icons/ic-register-calendar-selected.svg';
import {
  registerInputState,
  registerValidState,
  previewState
} from '@recoil/index';

const Calendar = () => {
  const [input, setInput] = useRecoilState(registerInputState);
  const setIsValid = useSetRecoilState(registerValidState);
  const [preview, setPreview] = useRecoilState(previewState);

  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const handleStartDateChange = (date: Date) => {
    const formattedDate = format(date, 'yyyy.MM.dd');

    setInput({ ...input, startDate: formattedDate });
    setPreview({ ...preview, startDate: formattedDate + ' ~ ' });
    setIsValid(prev => ({
      ...prev,
      isDateValid: true
    }));
  };

  const handleEndDateChange = (date: Date) => {
    const formattedDate = format(date, 'yyyy.MM.dd');

    setInput({ ...input, endDate: formattedDate });
    setPreview({
      ...preview,
      startDate: preview.startDate === '노출 기간' ? '' : preview.startDate,
      endDate: formattedDate
    });
    setIsValid(prev => ({
      ...prev,
      isDateValid: true
    }));
  };

  const StartDateInput = forwardRef(
    (
      { value, onClick }: CustomInputProps,
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <CustomInput
        onClick={onClick}
        ref={ref}
      >
        <SelectedDate>{value}</SelectedDate>
        <img
          src={input.startDate ? selected : notSelected}
          alt="달력 아이콘"
        />
      </CustomInput>
    )
  );

  const EndDateInput = forwardRef(
    (
      { value, onClick }: CustomInputProps,
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <CustomInput
        onClick={onClick}
        ref={ref}
      >
        <SelectedDate>{value}</SelectedDate>
        <img
          src={input.endDate ? selected : notSelected}
          alt="달력 아이콘"
        />
      </CustomInput>
    )
  );

  return (
    <>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={input.startDate ? new Date(input.startDate) : null}
        selectsStart
        startDate={input.startDate ? new Date(input.startDate) : null}
        endDate={input.endDate ? new Date(input.endDate) : null}
        minDate={tomorrow}
        onChange={handleStartDateChange}
        customInput={<StartDateInput onClick={() => {}} />}
      />
      <Dash>-</Dash>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={input.endDate ? new Date(input.endDate) : null}
        selectsEnd
        startDate={input.startDate ? new Date(input.startDate) : null}
        endDate={input.endDate ? new Date(input.endDate) : null}
        minDate={input.startDate ? new Date(input.startDate) : null}
        onChange={handleEndDateChange}
        customInput={<EndDateInput onClick={() => {}} />}
      />
    </>
  );
};

export default Calendar;

const CustomInput = styled.button`
  width: 120px;
  height: 32px;

  padding: 0px;
  border: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;

  background: #fff;

  cursor: pointer;
`;

const SelectedDate = styled.span`
  color: ${theme.colors.hover};
`;

const Dash = styled.div`
  margin: 0px 15px;
`;
