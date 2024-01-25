import styled from '@emotion/styled';
import SyncIcon from '@assets/icons/sync-outline.svg';

import { useGetSettlemented } from 'src/hooks/queries/useGetSettlemented';
import headerAccommodationState from '@recoil/atoms/headerAccommodationState';
import { useRecoilValue } from 'recoil';

const SettlementsUpdate = () => {
    const accommodation = useRecoilValue(headerAccommodationState);

    const currentDate = new Date();
  
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
  
    const { data: summary } = useGetSettlemented(accommodation.id);

  return (
      <UpdatedInnerContainer>
        <UpdatedWrapper>
          <WrapperTop>
            <DueDateText>
              정산예정일
            </DueDateText>
            <DueDateDay>
            {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 2}월 10일`}
            </DueDateDay>
          </WrapperTop>
          <WrapperBottom>
            <DueDateText>
              {`${currentDate.getMonth() + 1}월 1일부터 현재까지 금액`}
            </DueDateText>
            <CommonContainer>
              <Icon src={SyncIcon} alt="업데이트" />
              <UpdatedText>
                매일 00시 00분에 업데이트
              </UpdatedText>
            </CommonContainer>
            <DueDateDay>
            {summary ? (summary.this_month_settlement_amount === 0 ? '-' : new Intl.NumberFormat('ko-KR').format(summary.this_month_settlement_amount) + '원') : '데이터 로딩 중...'}
            </DueDateDay>
          </WrapperBottom>
        </UpdatedWrapper>
      </UpdatedInnerContainer>
  );
};

export default SettlementsUpdate;

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

  @media (max-width: 478px) {
    font-size: 11px;
  }
`;

const DueDateDay = styled.div`
  margin-left: auto;
  margin-top: 10px;

  align-items: flex-end

  font-size: 16px;
  font-weight: bold;
  color: #3182F6;

  @media (max-width: 478px) {
    font-size: 10px;
  }
`;

const WrapperBottom = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
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

  @media (max-width: 478px) {
    font-size: 9px;
  }
`;

const Icon = styled.img`
  margin-right: 3px;
`;
