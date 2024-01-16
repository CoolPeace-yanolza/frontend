import styled from '@emotion/styled';
import waitIcon from '@assets/icons/CouponList/ic_expose_wait.svg';
import centerIcon from '@assets/icons/CouponList/ic_center.svg';

const CouponWait = () => {
  return (
    <div>
      <CouponHeader>
        <ExposeContainer>
          <ExposeWrap>
            <img
              src={waitIcon}
              alt="waitIcon"
            />
            <ExposeText>쿠폰 노출 대기</ExposeText>
          </ExposeWrap>
        </ExposeContainer>
        <RoomWrap>
          <ApplyRoom>적용 객실</ApplyRoom>
          <RoomButton>전체</RoomButton>
        </RoomWrap>
      </CouponHeader>
      <CouponNabWrap>
        <CouponTitle>크리스마스 이벤트1</CouponTitle>
        <CouponCustomer>모든 고객 10% 할인</CouponCustomer>
      </CouponNabWrap>
      <CouponMain>
        <CountWrap>
          <CountItemWrap>
            <CountItemText>다운로드</CountItemText>
            <p>50</p>
          </CountItemWrap>
          <CountItemWrap>
            <CountItemText>사용완료</CountItemText>
            <p>50</p>
          </CountItemWrap>
        </CountWrap>
        <ConditionWrap>
          <ConditionWrapText>
            <div>가격 조건</div>
            <p>300,000원 이상</p>
          </ConditionWrapText>
          <ConditionWrapText>
            <div>일정 조건</div>
            <p>2박 이상, 금~토</p>
          </ConditionWrapText>
        </ConditionWrap>
        <ExposeDateContainer>
          <ExposeDateWrap>
            <div>노출 일자</div>
            <p>2023.12.01 ~ 2023.12.31</p>
          </ExposeDateWrap>
          <RegisterDateWrap>
            <div>등록일</div>
            <div>2023.12.01</div>
          </RegisterDateWrap>
        </ExposeDateContainer>
        <ButtonWrap>
          <button>수정</button>
          <img
            src={centerIcon}
            alt="centerIcon"
          />
          <button>삭제</button>
        </ButtonWrap>
      </CouponMain>
    </div>
  );
};

export default CouponWait;

const CouponHeader = styled.div`
  width: 219px;
  height: 77px;

  border-radius: 10.608px 10.608px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #b1b1b1;
`;

const ExposeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 10px;
`;

const ExposeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExposeText = styled.div`
  color: #202325;

  margin-left: 2px;

  font-size: 12px;
`;

const RoomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApplyRoom = styled.div`
  position: relative;

  width: 194px;
  height: 31px;

  padding-top: 12px;
  padding-left: 10px;
  border-radius: 8px;

  background-color: ${props => props.theme.colors.white};

  font-size: 10px;
  color: #404446;
`;

const RoomButton = styled.button`
  position: absolute;

  width: 113px;
  height: 23px;

  margin-left: 76px;
  border-radius: 12px;
  border: 1px solid #6c7072;

  background-color: transparent;

  color: #6c7072;
  font-size: 11px;
`;

const CouponNabWrap = styled.div`
  width: 217px;
  height: 72px;

  margin-left: 1px;
  padding: 15px;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom: 2px dashed #cdcfd0;

  background-color: ${props => props.theme.colors.white};
`;

const CouponTitle = styled.div`
  color: #6c7072;
  font-size: 13px;
`;

const CouponCustomer = styled.div`
  font-size: 16.997px;
  font-weight: 700;

  margin-top: 5px;
  color: #202325;
`;

const CouponMain = styled.div`
  width: 217px;
  height: 245px;

  margin-left: 1px;
  border-bottom: 1px dashed #b2b2b2;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: #fafafb;
`;

const CountWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

const CountItemWrap = styled.div`
  width: 79px;
  height: 83px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;

  border-radius: 12px;

  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: #404446;
    font-size: 18px;
    font-weight: 700;
  }
`;

const CountItemText = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #757676;
  margin: 5px;
`;

const ConditionWrap = styled.div`
  width: 176px;
  height: 56px;

  display: flex;
  flex-direction: column;
  padding: 16px 15px 13px 14px;
  margin-top: 5px;

  border-radius: 12px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const ConditionWrapText = styled.div`
  display: flex;
  margin-top: 2px;

  div {
    color: #404446;
    font-size: 11px;
    font-weight: 600;
    margin-right: 10px;
  }

  p {
    color: #404446;
    font-size: 11px;
    font-weight: 400;
  }
`;

const ExposeDateContainer = styled.div`
  margin-top: 18px;
`;

const ExposeDateWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #404446;
    font-size: 11px;
    font-weight: 600;
    margin-right: 3px;
  }

  p {
    color: ${props => props.theme.colors.pink500};
    font-size: 12px;
    font-weight: 700;
    text-decoration-line: underline;
  }
`;

const RegisterDateWrap = styled.div`
  display: flex;
  align-items: center;

  div {
    color: #757676;
    font-size: 9.724px;
    font-weight: 400;
    margin-top: 8px;
    margin-right: 3px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-left: 115px;
  margin-top: -3px;

  button {
    background: transparent;
    border: none;
    color: #6c7072;
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    cursor: pointer;
  }
`;
