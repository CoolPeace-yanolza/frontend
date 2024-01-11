import styled from '@emotion/styled';

import SettlementsTable from './SettlementsTable';

const Settlemented = () => {

  return (
    <Container>
      <SettlementedHeader>
        <TotalData>
            전체 내역 0개
        </TotalData>
        <OptionContainer>
          <SortOption>
            토글버튼
          </SortOption>
          <ExcelDownload>
            <button>엑셀 다운로드</button>
          </ExcelDownload>
        </OptionContainer>
      </SettlementedHeader>
      <DataLow>
        <SettlementsTable data={[]}/>
      </DataLow>
      <Data>

      </Data>
    </Container>
  )
}

export default Settlemented;

const Container = styled.nav`
  margin-right: 43px;
  margin-left: 43px;
`;

const SettlementedHeader = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const TotalData = styled.div`
  font-size: 14px;
  font-weight: bold;

  color: white;
`;

const OptionContainer = styled.div`
    display: flex;
`;

const SortOption = styled.div`
  margin-right: 20px;

  font-size: 14px;
  font-weight: bold;

  color: white;

  white-space: nowrap;
`;

const ExcelDownload = styled.div`
  width: 100%;

  white-space: nowrap;
`;

const DataLow = styled.div`
  width: 100%;
`;
const Data = styled.div`
  width: 100%;
`;