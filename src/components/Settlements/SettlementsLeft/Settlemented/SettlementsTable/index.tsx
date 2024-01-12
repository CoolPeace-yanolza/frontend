import styled from '@emotion/styled';
import { SettlementItem } from '../../../../../types/settlements';
import settlementsFrame from '@assets/icons/settlements-data-frame.svg'; 

const SettlementsTable = ({ data }: { data: SettlementItem[] }) => {
  const keys = [
    '쿠폰 적용일',
    '쿠폰번호',
    '관리 쿠폰명',
    '사용 건수',
    '쿠폰 할인 금액',
    '쿠폰 취소 금액',
    '정산 금액',
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
      {data.map((row, index) => (
        <Row key={index}>
          {Object.values(row).map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </Row>
      ))}
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
  flex: 1;
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const Row = styled.div`
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

const FrameContainer = styled.div`
  width: 100%;

  padding-left: 10px;
  padding-right: 10px;

  text-align: center;
`;

const Frame = styled.div`
  height: 500px;

  background: url(${settlementsFrame});
`;
