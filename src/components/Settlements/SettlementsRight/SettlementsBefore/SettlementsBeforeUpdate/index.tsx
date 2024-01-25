import styled from '@emotion/styled';

import { useGetSettlemented } from 'src/hooks/queries/useGetSettlemented';
import headerAccommodationState from '@recoil/atoms/headerAccommodationState';
import { useRecoilValue } from 'recoil';

const SettlementsBeforeUpdate = () => {

    const accommodation = useRecoilValue(headerAccommodationState);

    const currentDate = new Date();
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(currentDate.getMonth() - 1);
    lastMonth.setDate(1);
  
    const isBeforeDueDate = currentDate.getDate() < 10;
  
    const { data: summary } = useGetSettlemented(accommodation.id);

  return (
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
          {summary ? (summary.last_month_settlement_amount === 0 ? '-' : new Intl.NumberFormat('ko-KR').format(summary.last_month_settlement_amount) + '원') : '데이터 로딩 중...'}
          </DueDateMoney>
        </DueDateInnerContainer>
      </WrapperTop>
    </UpdatedWrapper>
  </UpdatedInnerContainer>
  );
};

export default SettlementsBeforeUpdate;

const UpdatedInnerContainer = styled.div`
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 5px;

  background-color: white;
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
  
  @media (max-width: 478px) {
    font-size: 11px;
  }
`;

const DueDateInnerContainer = styled.div`
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 530px) {
    flex-direction: column;
  }
`;

const DueDateDay = styled.div`
  font-size: 12px;
  font-weight: regular;
  color: black;

  @media (max-width: 530px) {
    width: 100%;
  }

  @media (max-width: 478px) {
    font-size: 10px;
  }
`;

const DueDateMoney = styled.div`
  margin-left: auto;

  align-items: flex-end

  font-size: 16px;
  font-weight: bold;

  @media (max-width: 530px) {
    margin-top: 8px;

    width: 100%;
  }

  @media (max-width: 478px) {
    font-size: 10px;
  }
`;