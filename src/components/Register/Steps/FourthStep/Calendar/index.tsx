import { forwardRef, ForwardedRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import styled from '@emotion/styled';
import { createGlobalStyle } from 'styled-components';

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
      <CustomDatePicker />
      <DatePicker
        dateFormat="yyyy.MM.dd"
        locale={ko}
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
        locale={ko}
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

const CustomDatePicker = createGlobalStyle`
  .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before {
    border-bottom-color: transparent;
  }

  .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
    border-bottom-color: ${theme.colors.hover};
  }

  .react-datepicker {
    border: none;
    border-radius: 19px;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);

    font-family: 'Noto Sans KR';
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 20px;
  }

  .react-datepicker__header {
    border: none;
    border-top-left-radius: 20px;

    background: ${theme.colors.hover}
  }

  .react-datepicker__navigation-icon {

  }

  .react-datepicker__current-month {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
  }

  .react-datepicker__day-name {
    color: #fff;
  }

  .react-datepicker__day {
    color: ${theme.colors.hover};
    font-size: 11px;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    color: #fff;

    background: ${theme.colors.hover};
  }
`;

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
