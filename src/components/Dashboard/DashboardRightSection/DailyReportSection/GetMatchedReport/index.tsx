import styled from '@emotion/styled';

import theme from '@styles/theme';
import reportImage01 from '/images/ic-dailyReport-status01.png';
import reportImage02 from '/images/ic-dailyReport-status02.png';
import reportImage03 from '/images/ic-dailyReport-status03.png';
import reportImage04 from '/images/ic-dailyReport-status04.png';

//HACK: 더 효율적인 구조로 개선시도하기
const ReportCondition01 = () => (
  <Container>
    <ImageContainer>
      <img
        src={reportImage01}
        alt="쿠폰만료임박"
      />
    </ImageContainer>
    <AlarmContainer>
      <AlarmInnerContainer>
        <AlarmHeaderText>
          <AlarmColoredText>곧 만료되는 쿠폰</AlarmColoredText> 이 있습니다.
        </AlarmHeaderText>
        <AlarmSubText>
          새 쿠폰을 등록하여
          <br />
          예약율을 더욱 높여보세요!
        </AlarmSubText>
      </AlarmInnerContainer>
    </AlarmContainer>
  </Container>
);

const ReportCondition02 = () => (
  <Container>
    <ImageContainer>
      <img
        src={reportImage02}
        alt="노출쿠폰부재"
      />
    </ImageContainer>
    <AlarmContainer>
      <AlarmInnerContainer>
        <AlarmHeaderText>
          현재 내 숙소에서
          <br />
          <AlarmColoredText>노출 중인 쿠폰이 없습니다.</AlarmColoredText>
        </AlarmHeaderText>
        <AlarmSubText>
          새 쿠폰을 등록하여
          <br />
          예약율을 더욱 높여보세요!
        </AlarmSubText>
      </AlarmInnerContainer>
    </AlarmContainer>
  </Container>
);

const ReportCondition03 = () => (
  <Container>
    <ImageContainer>
      <img
        src={reportImage03}
        alt="등록쿠폰부재"
      />
    </ImageContainer>
    <AlarmContainer>
      <AlarmInnerContainer>
        <AlarmHeaderText>
          현재 내 숙소에서
          <br />
          <AlarmColoredText>등록된 쿠폰이 없습니다.</AlarmColoredText>
        </AlarmHeaderText>
        <AlarmSubText>
          새 쿠폰을 등록하여
          <br />
          예약율을 더욱 높여보세요!
        </AlarmSubText>
      </AlarmInnerContainer>
    </AlarmContainer>
  </Container>
);

const ReportCondition04 = () => (
  <Container>
    <ImageContainer>
      <img
        src={reportImage04}
        alt="쿠폰사용상태"
      />
    </ImageContainer>
    <AlarmContainer>
      <AlarmInnerContainer>
        <AlarmHeaderText>
          지금 <AlarmColoredText>숙소 쿠폰 사용 상태</AlarmColoredText> 를
          <br />
          확인해보세요.
        </AlarmHeaderText>
        <AlarmSubText>
          쿠폰을 통해 예약율을
          <br />
          더욱 높일 수 있어요!
        </AlarmSubText>
      </AlarmInnerContainer>
    </AlarmContainer>
  </Container>
);

const GetMatchedReport = (condition: number) => {
  switch (condition) {
    case 1:
      return <ReportCondition01 />;
    case 2:
      return <ReportCondition02 />;
    case 3:
      return <ReportCondition03 />;
    case 4:
      return <ReportCondition04 />;
  }
};

export default GetMatchedReport;

const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.response.tablet} {
    flex: 1;

    & > img {
      width: 130px;
    }
  }
`;

const AlarmContainer = styled.div`
  width: 100%;
  min-height: 140px;

  margin-top: 10px;
  padding: 12px;
  border-radius: 17px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fafafb;

  ${theme.response.tablet} {
    height: 120px;
    min-height: auto;

    margin: 0;

    flex: 2;
  }
`;

const AlarmInnerContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 10px;
  border-radius: 17px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: #202325;
  text-align: center;

  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
`;

const AlarmHeaderText = styled.div`
  width: 100%;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;

  white-space: nowrap;

  ${theme.response.tablet} {
    font-size: 11px;
  }
`;

const AlarmSubText = styled.div`
  width: 100%;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  ${theme.response.tablet} {
    font-size: 10px;
  }
`;

const AlarmColoredText = styled.span`
  color: #ff3478;
`;
