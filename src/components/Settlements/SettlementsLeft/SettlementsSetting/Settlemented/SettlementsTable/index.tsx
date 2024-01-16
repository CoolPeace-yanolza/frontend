import styled from '@emotion/styled';

import { SettlementItem } from '../../../../../../types/settlements';
import settlementsFrame from '@assets/icons/settlements-data-frame.svg'; 

const SettlementsTable = ({ data, pageStartNumber }: { data: SettlementItem[], pageStartNumber: number }) => {
  
  const keys: (keyof SettlementItem)[] = [
    'NO',
    '쿠폰번호',
    '관리 쿠폰명',
    '사용 건수',
    '쿠폰 할인 금액',
    '쿠폰 취소 금액',
    '정산 금액',
    '쿠폰 적용일',
    '정산 완료일'
  ];

  if (!data || data.length === 0) {
    return (
      <Container>
        <Header>
          {keys.map((key, index) => (
            <KeyElement key={index}>{key}</KeyElement>
          ))}
        </Header>
        <FrameContainer>
          <Frame>
            <div>데이터가 없습니다.</div>
          </Frame>
        </FrameContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        {keys.map((key, index) => (
          <KeyElement key={index}>{key}</KeyElement>
        ))}
      </Header>
      <FrameContainer>
        <Frame>
          {data.map((row, index) => (
            <Row key={index} isLast={false}>
              {keys.map((key) => (
                 <DataElement key={key}>
                  {key === 'NO' ? pageStartNumber - index : row[key]}
               </DataElement>
              ))}
            </Row>
          ))}
        </Frame>
      </FrameContainer>
    </Container>
  );
};

export default SettlementsTable;

const Container = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 20px 0;

  display: flex;
  justify-content: space-between;

  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
`;

const KeyElement = styled.div`
  width: 10%;
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const Row = styled.div<{ isLast: boolean }>`
  // margin-bottom: 10px;

  display: flex;
  justify-content: space-between;

  border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')}; 

  &:last-child {
    border-bottom: none;
  }
`;

const FrameContainer = styled.div`
  width: 100%;

  padding-left: 10px;
  padding-right: 10px;

  box-sizing: border-box;

  text-align: center;
`;

const Frame = styled.div`
  height: 500px;

  background: url(${settlementsFrame});
`;

const DataElement = styled.div`
  width: 10%;
  height: 48px;

  padding-top: 18px;

  // display: flex;
  // align-items: center;
  justify-content: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

