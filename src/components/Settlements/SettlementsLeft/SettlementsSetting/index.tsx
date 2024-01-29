import styled from '@emotion/styled';
import { Suspense, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorModal } from '@components/common';
import { ERROR_MODAL_MESSAGE } from 'src/constants';
import { settlementsDateState } from '@recoil/atoms/settlemented';
import { getCurrentYearStartDate, getCurrentYearEndDate } from '@utils/index';
import Settlemented from './Settlemented';
import SettlementsHeader from './SettlementsHeader';
import CalendarIcon from '@assets/icons/calendar-outline.svg';
import theme from '@styles/theme';
import Loading from './Settlemented/index.loading';
import ErrorFallback from './Settlemented/index.error';
import { currentPageState } from '@recoil/index';

const SettlementsSetting = () => {

  const { reset } = useQueryErrorResetBoundary();

  const [,setCurrentPage] = useRecoilState(currentPageState);

  const [startDate, setStartDate] = useState<Date | null>(new Date(getCurrentYearStartDate()));
  const [endDate, setEndDate] = useState<Date | null>(new Date(getCurrentYearEndDate()));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);

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
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    if (startDate && endDate) {
      if (
        startDate.getFullYear() === currentYear && startDate.getMonth() === currentMonth ||
        endDate.getFullYear() > currentYear ||
        endDate.getFullYear() === currentYear && endDate.getMonth() >= currentMonth ||
        startDate > endDate
      ) {
        handleModalOpen();
        return;
      }
      setSettlementsDate({ startDate, endDate });
      setCurrentPage(1);
    }
  };

  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <CustomInputContainer onClick={onClick} ref={ref}>
            <InputText>{value}</InputText>
      <Calendar src={CalendarIcon} alt="캘린더" />
    </CustomInputContainer>
  ));

  return (
    <Container>
      <SettlementsHeader/>
        <CalendarContainer>
          <CalendarInnerContainer>
            <CalendarText>기간 설정</CalendarText>
            </CalendarInnerContainer>
            <StyledDatePickerContainer>
            <DatePickerCustom />
            <StyledDatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy/MM"
              showMonthYearPicker
              placeholderText=""
              locale={ko}
              calendarClassName="custom-header" 
              customInput={<CustomInput />}  
            />
            -
            <StyledDatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy/MM"
              showMonthYearPicker
              placeholderText=""
              locale={ko}
              calendarClassName="custom-header"  
              customInput={<CustomInput />}  
            />
            <StyledButton onClick={handleButtonClick}>조회하기</StyledButton>
            </StyledDatePickerContainer>
        </CalendarContainer>
    <BreakLine>
            <hr />
    </BreakLine>
    <ErrorBoundary
     onReset={reset}
     fallbackRender={ErrorFallback}
    >
    <Suspense fallback={<Loading />}>
      <Settlemented />
    </Suspense>
    </ErrorBoundary>
    {isModalOpen && (
      <ErrorModal
        modalContent={ERROR_MODAL_MESSAGE.DATE_ERROR}
        ButtonFunc={handleModalClose}
      />
    )}
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

  hr {
    ${theme.response.tablet} {
      display: none;
    }
  }
`;

const CalendarContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${theme.response.tablet} {
    margin: 10px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const CalendarInnerContainer = styled.div`
  margin-top: 15px;

  display: flex;

  ${theme.response.tablet} {
    width: 100%;
  }
`;

const Calendar = styled.img`
  width: 15px;
  height: 15px;

  margin-right: 4px;
`;

const StyledDatePicker = styled(DatePicker)`
  margin: 6px;
  padding: 5px;

  width: 100px;

  border: none;
  border-radius: 8px; 

  font-size: 14px;
`;

const CalendarText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;

  margin-right: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 7px 14px;

  background-color: #3182F6;
  color: white;

  font-weight: 600;
  font-size: 12px;
  font-family: 'Noto Sans KR';

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }

  ${theme.response.tablet} {
    margin-left: auto;
  }
`;

const StyledDatePickerContainer = styled.div`
  margin-top: 15px;
  margin-right: 43px;

  display: flex;
  align-items: center;

  color: white;

  ${theme.response.tablet} {
    margin-left: auto;
    margin-right: 0px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const DatePickerCustom = createGlobalStyle`
.react-datepicker {
  border: none;
  border-radius: 1rem;
}

.react-datepicker__navigation-icon::before {
  top: 10px;

  border-color: white;
}

.custom-header {
  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: white;
  }

  .react-datepicker__header {
    padding: 12px 0px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;

    background-color: #1A2849;

  }

  .react-datepicker__month-text--keyboard-selected {
    background-color: #1A2849;
    color: white !important;

    font-weight: 700;
  }

  .react-datepicker__month .react-datepicker__month-text {
    padding: 4px;

    color: #1A2849;
    font-weight: 600;
  }
}
`;

const CustomInputContainer = styled.button`
  width: 100px;
  height: 26px;

  padding: 2px;
  margin: 6px;
  border: none;
  border-radius: 6px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-weight: 700;

  background: #fff;

  cursor: pointer;
`;

const InputText = styled.div`
  color: black;
`;