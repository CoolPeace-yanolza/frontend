import { forwardRef, ForwardedRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { CalendarProps, CustomInputProps } from '@/types/register';
import notSelected from '@assets/icons/ic-register-calendar.svg';
import selected from '@assets/icons/ic-register-calendar-selected.svg';

const Calendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setSelected
}: CalendarProps) => {
  const today = new Date();
  const tomorrow = new Date(today.setDate(today.getDate() + 1));

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setSelected(true);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setSelected(true);
  };

  const StartDateInput = forwardRef(
    (
      { value, onClick }: CustomInputProps,
      ref: ForwardedRef<HTMLButtonElement>
    ) => (
      <CustomInput
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
      >
        <SelectedDate>{value}</SelectedDate>
        <img
          src={startDate ? selected : notSelected}
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
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
      >
        <SelectedDate>{value}</SelectedDate>
        <img
          src={endDate ? selected : notSelected}
          alt="달력 아이콘"
        />
      </CustomInput>
    )
  );

  return (
    <>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={startDate}
        selectsStart
        startDate={tomorrow}
        minDate={tomorrow}
        onChange={handleStartDateChange}
        customInput={<StartDateInput onClick={() => {}} />}
      />
      <Dash>-</Dash>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        selected={endDate}
        selectsEnd
        startDate={startDate}
        minDate={startDate}
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
