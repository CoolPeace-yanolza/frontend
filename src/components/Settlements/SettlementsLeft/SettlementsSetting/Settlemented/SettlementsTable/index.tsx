import styled from '@emotion/styled';

import { SettlementedItem, SettlementsTableProps } from '@/types/settlements';
import settlementsFrame from '@assets/icons/settlements-data-frame.svg'; 
import theme from '@styles/theme';
import keyToLabelMap from 'src/constants/lib/SETTLEMENTS_TABLE_KEY';

const SettlementsTable = ({ data, pageStartNumber }: SettlementsTableProps) => {
  
  const keys: (keyof SettlementedItem)[] = [
    'NO',
    'coupon_number',
    'coupon_name',
    'coupon_count',
    'discount_price',
    'cancel_price',
    'sum_price',
    'coupon_use_date',
    'complete_at'
  ];
  
  if (!data || data.length === 0) {
    return (
      <Container>
        <Header>
          {keys.map((key, index) => (
            <KeyElement key={index}>{keyToLabelMap[key]}</KeyElement>
          ))}
        </Header>
        <FrameContainer>
          <Frame>
            <NoDataText>쿠폰 정산 내역이 없습니다.</NoDataText>
          </Frame>
        </FrameContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        {keys.map((key, index) => (
          <KeyElement key={index}>{keyToLabelMap[key]}</KeyElement>
        ))}
      </Header>
      <FrameContainer>
        <Frame>
          {data.map((row, index) => (
            <Row key={index} isLast={false}>
              {keys.map((key) => (
                 <DataElement key={key}>
                  <MobileDataElement>{keyToLabelMap[key]}</MobileDataElement>
                  <MobileData>
                    {key === 'NO' ? pageStartNumber - index : null}
                    {key === 'coupon_count' ? `${row[key].toLocaleString()}건` : null}
                    {(key === 'discount_price' || key === 'cancel_price' || key === 'sum_price') ? `${row[key].toLocaleString()}원` : null}
                    {(key !== 'NO' && key !== 'coupon_count' && key !== 'discount_price' && key !== 'cancel_price' && key !== 'sum_price') ? row[key] : null}
                  </MobileData>
                  <WebData>
                    {key === 'NO' && pageStartNumber - index}
                    {key === 'coupon_count' && `${row[key].toLocaleString()}건`}
                    {(key === 'discount_price' || key === 'cancel_price' || key === 'sum_price') && `${row[key].toLocaleString()}원`}
                    {(key !== 'NO' && key !== 'coupon_count' && key !== 'discount_price' && key !== 'cancel_price' && key !== 'sum_price') && row[key]}
                  </WebData>
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
  

  ${theme.response.tablet} {
    overflow-x: hidden;
  }
`;

const Header = styled.div`
  padding: 20px 0;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  display: flex;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.05);
  
  box-shadow: inset 0px 0px 5px rgba(205, 207, 208, 0.5), 0px 0px 5px rgba(0, 0, 0, 0.5);

  ${theme.response.tablet} {
    display: none;
  }
`;

const KeyElement = styled.div`
  width: 10%;
  text-align: center;

  font-size: 14px;
  font-weight: bold;
  color: white;
`;


const FrameContainer = styled.div`
  width: 100%;

  box-sizing: border-box;

  text-align: center;
`;

const Frame = styled.div<{ hasData?: boolean }>`
  width: 99.7%;
  height: 500px;

  margin-left: auto;
  margin-right: auto;

  position: relative; 

  background: url(${settlementsFrame});

  ${theme.response.tablet} {
    background: none;
    background-color: white;
    height: 100%;
  }
`;

const NoDataText = styled.div`
  font-size: 15px;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${theme.response.tablet} {
    margin: 10px 0px;

    position: static; 
    transform: none; 
    
    background-color: #1A2849;
    color: white;
  }
`;

const DataElement = styled.div`
  width: 10%;
  height: 48px;

  padding-top: 18px;

  justify-content: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${theme.response.tablet} {
    padding: 5px 0px;

    width: 100%;
    height: 100%;

    display: flex;

    white-space: none;
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const MobileDataElement = styled.span` 
  margin-left: auto;

  display: flex;

  font-weight: 700;

  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileData = styled.span`
  padding-left: 10%;

  width: 55%;

  display: flex;

  @media (min-width: 900px) {
    display: none;
  }
`;

const WebData = styled.span`
  ${theme.response.tablet} {
    display: none;
  }
`;

const Row = styled.div<{ isLast: boolean }>`
  display: flex;
  justify-content: space-between;

  border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #ccc')}; 

  &:last-child {
    border-bottom: none;
  }

  ${theme.response.tablet} {
    padding: 20px 0px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-overflow: ellipsis;
  }
`;

