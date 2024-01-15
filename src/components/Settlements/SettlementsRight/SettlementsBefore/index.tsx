import styled from '@emotion/styled';

import SyncIcon from '@assets/icons/sync-outline.svg';
import receiptIcon from '@assets/icons/receipt-sharp.svg'; 

const SettlementsBefore = () => {

  const currentDate = new Date();
  const lastMonth = new Date(currentDate);
  lastMonth.setMonth(currentDate.getMonth() - 1);
  lastMonth.setDate(1);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month < 10 ? '0' : ''}${month}.${day < 10 ? '0' : ''}${day}`;
  };

  const isBeforeDueDate = currentDate.getDate() < 10;


  return (
    <Container>
    <InnerContainer>
      <ExpectedContainer>
      <ExpectedText>
      {`${currentDate.getMonth() + 1}월 정산 금액`}
      </ExpectedText>
      <CommonContainer>
      <Icon
        src={SyncIcon}
        alt="업데이트" />
      <UpdatedText>
        {isBeforeDueDate
          ? `매월 1일 00시 00분 업데이트`
          : `매월 11일 00시 00분 업데이트`
        }
      </UpdatedText>
      </CommonContainer>
      </ExpectedContainer>
      <UpdatedContainer>
        <MoneyContainer>
          <MoneyText>
            쿠폰 적용 금액
          </MoneyText>
          <MoneyDay>
          {`${lastMonth.getFullYear()}.${lastMonth.getMonth() < 9 ? '0' : ''}${lastMonth.getMonth() + 1}.01 ~ ${formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), 0))}`}
          </MoneyDay>
        </MoneyContainer>
      <UpdatedInnerContainer>
        <UpdatedWrapper>
          <WrapperTop>
            <DueDateText>
              {isBeforeDueDate
                ? `정산 예정 금액`
                : `정산 완료 금액`
              }
            </DueDateText>
            <DueDateInnerContainer>
              <DueDateDay>
                {isBeforeDueDate
                  ? `${currentDate.getMonth() + 1}월 10일에 정산할 금액`
                  : `${currentDate.getMonth() + 1}월 10일 정산 완료 금액`
                }
              </DueDateDay>
              <DueDateMoney>
                50,000원
              </DueDateMoney>
            </DueDateInnerContainer>
          </WrapperTop>
        </UpdatedWrapper>
      </UpdatedInnerContainer>
      </UpdatedContainer>
    </InnerContainer>
    <ReceiptIcon
     src={receiptIcon}
     alt="영수증" />
  </Container>
  )
}

export default SettlementsBefore;

const Container = styled.div`
  margin: 15px;

  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const ExpectedContainer = styled.div`
  margin-top: 30px;
`;

const ExpectedText = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

const CommonContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  align-items: center;
`;

const UpdatedText = styled.div`
  margin-top: 1px;

  font-size: 11px;
  font-weight: normal;
  color: #CDCFD0;
`;

const UpdatedContainer = styled.div`
  width: 100%;

  margin-top: 40px;

  border: 1.5px solid white;
  border-radius: 8px;
`;

const UpdatedInnerContainer = styled.div`
  margin-top: 20px;

  background-color: white;

  border: 1px solid white;
  border-radius: 5px;
`;

const UpdatedWrapper = styled.div`
  margin: 15px;
`;

const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const DueDateText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const DueDateInnerContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

const DueDateDay = styled.div`
  font-size: 12px;
  font-weight: regular;
  color: black;
`;

const DueDateMoney = styled.div`
  margin-left: auto;

  align-items: flex-end

  font-size: 16px;
  font-weight: bold;
`;

const MoneyContainer = styled.div`
  margin: 30px 15px;
`;

const MoneyText = styled.div`
  margin-bottom: 15px;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const MoneyDay = styled.div`
  font-size: 12px;
  color: white;
`;

const Icon = styled.img`
  margin-right: 3px;
`;

const ReceiptIcon = styled.img`
  margin-top: 40px;
  margin-left: auto;
`;