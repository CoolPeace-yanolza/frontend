import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import CouponCounter from './CouponCounter';
import CouponRate from './CouponRate';
import titleIcon from '@assets/icons/ic-dashboard-downloadReport.svg';
import reloadIcon from '@assets/icons/ic-dashboard-reload.svg';
import { headerAccommodationState } from '@recoil/index';
import { useGetMonthReports } from '@hooks/queries/useGetMonthReports';

const DownloadReport = () => {
  const headerSelectedState = useRecoilValue(headerAccommodationState);
  const { data } = useGetMonthReports(headerSelectedState.id);
  const lastestData = data[data.length - 1];

  return (
    <Container>
      <Header>
        <Title>
          <TitleIcon src={titleIcon} />
          다운로드 리포트
        </Title>
        <HeaderDescription>
          <ReloadIcon src={reloadIcon} />
          매월 1일 00시 00분에 업데이트
        </HeaderDescription>
      </Header>
      <InnerContainer>
        <CouponCounterSection>
          <CouponCounter
            type="download"
            result={lastestData.download_count}
          />
          <CouponCounter
            type="used"
            result={lastestData.used_count}
          />
        </CouponCounterSection>
        <CouponRateSection>
          <CouponRate result={lastestData.conversion_rate * 0.1} />
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
  align-items: center;
`;

const Title = styled.span`
  color: #484e59;
  font-size: 18px;
  font-weight: 700;
`;

const HeaderDescription = styled.div`
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
