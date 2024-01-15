import { useState } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarIcon from '@assets/icons/calendar-number-outline.svg';

const SettlementsCalender = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date); 
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date); 
  };

  const handleButtonClick = () => {
    console.log('조회하기 버튼이 클릭되었습니다.');
  };

  return (
    <Container>
       <Calendar
        src={CalendarIcon}
        alt="캘린더" />
      <CalendarText>기간 설정</CalendarText>
      <StyledDatePicker
        selected={startDate}
        onChange={handleStartDateChange}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        placeholderText=""
      />
      <StyledDatePicker
        selected={endDate}
        onChange={handleEndDateChange}
        dateFormat="yyyy/MM"
        showMonthYearPicker
        placeholderText=""
      />
      <StyledButton onClick={handleButtonClick}>조회하기</StyledButton>
    </Container>
  )
}

export default SettlementsCalender;

const Container = styled.nav`
  margin-right: 43px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Calendar = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 10px;
`;

const StyledDatePicker = styled(DatePicker)`
  border: none;
  border-radius: 8px; 
  padding: 5px; 
  margin-right: 10px;
  width: 100px;
`;

const CalendarText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;

  margin-right: 10px;
`;

const StyledButton = styled.button`
  padding: 5px 10px;

  background-color: #3182F6;
  color: white;
  font-weight: 700;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;