import styled from '@emotion/styled';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSetRecoilState } from 'recoil';

import CalendarIcon from '@assets/icons/calendar-number-outline.svg';
import Settlemented from './Settlemented';
import SettlementsHeader from './SettlementsHeader';
import { settlementsDateState } from '@recoil/atoms/settlemented';

const SettlementsSetting = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const setSettlementsDate = useSetRecoilState(settlementsDateState);

  const handleStartDateChange = (date: Date | null) => {
    if (date) {
      date.setDate(1);
      date.setHours(0, 0, 0, 0); 
    }
    setStartDate(date);
  };
  
  const handleEndDateChange = (date: Date | null) => {
    if (date) {
      date.setMonth(date.getMonth() + 1);
      date.setDate(0); 
      date.setHours(23, 59, 59, 999);
    }
    setEndDate(date);
  };

  const handleButtonClick = () => {
    console.log('조회하기 버튼이 클릭되었습니다.');
    if (startDate && endDate) {
        setSettlementsDate({ startDate, endDate });
        console.log(settlementsDateState);
    }
  };

  return (
    <Container>
      <SettlementsHeader/>
        <CalendarContainer>
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
        </CalendarContainer>
    <BreakLine>
            <hr />
    </BreakLine>
    <Settlemented />
    </Container>
  )
}

export default SettlementsSetting;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BreakLine = styled.div`
  margin: 0 40px;
`;

const CalendarContainer = styled.nav`
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
  padding: 7px 14px;

  background-color: #3182F6;
  color: white;

  font-weight: 600;
  font-size: 12px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;