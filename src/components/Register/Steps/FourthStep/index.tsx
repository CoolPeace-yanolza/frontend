import styled from '@emotion/styled';

import { InputContainer } from '@components/Register/common';
import calendar from '@assets/icons/ic-register-calendar.svg';

const FourthStep = () => {
  return (
    <InputContainer title="쿠폰의 노출 기간을 선택해주세요.">
      <ContentContainer>
        <Description>
          쿠폰의 유효기간은 다운로드 일자부터 14일 자정까지 입니다.
        </Description>
        <Duration>
          2023.08.31
          <CalendarIcon
            src={calendar}
            alt="달력 아이콘"
          />
          <Dash>-</Dash>
          2023.09.31
          <CalendarIcon
            src={calendar}
            alt="달력 아이콘"
          />
        </Duration>
      </ContentContainer>
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

const Duration = styled.button`
  width: 336px;
  height: 45px;

  margin-top: 20px;
  padding: 7px 23px;
  border: 1px solid #979c9e;
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

const CalendarIcon = styled.img`
  margin-left: 5px;
`;

const Dash = styled.div`
  margin: 0px 20px;
`;
