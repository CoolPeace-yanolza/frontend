import styled from '@emotion/styled';

import CouponCounter from './CouponCounter';
import CouponRate from './CouponRate';
import titleIcon from '@assets/icons/ic-dashboard-downloadReport.svg';
import reloadIcon from '@assets/icons/ic-dashboard-reload.svg';

//HACK : 해당 컴포넌트에서 서버상태값 전달
const DownloadReport = () => {
  return (
    <Container>
      <Header>
        <Title>
          <TitleIcon src={titleIcon} />
          다운로드 리포트
        </Title>
        <HeaderDiscription>
          <ReloadIcon src={reloadIcon} />
          매월 1일 00시 00분에 업데이트
        </HeaderDiscription>
      </Header>
      <InnerContainer>
        <CouponCounterSection>
          <CouponCounter
            type="download"
            result={400}
          />
          <CouponCounter
            type="used"
            result={200}
          />
        </CouponCounterSection>
        <CouponRateSection>
          <CouponRate result={10} />
        </CouponRateSection>
      </InnerContainer>
    </Container>
  );
};

export default DownloadReport;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 20px 0 10px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.span`
  color: #484e59;
  font-size: 18px;
  font-weight: 700;
`;

const HeaderDiscription = styled.div`
  padding: 12px 7px 10px;

  display: flex;
  align-items: center;

  color: #6c7072;
  font-size: 11px;
  font-weight: 400;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  background-color: #fafafb;
`;

const CouponCounterSection = styled.div`
  width: 100%;

  flex: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const CouponRateSection = styled.div`
  width: 100%;

  flex: 4;
`;

const TitleIcon = styled.img`
  padding-right: 5px;
`;

const ReloadIcon = styled(TitleIcon)`
  padding: 0px 3px 2px 0px;
`;
