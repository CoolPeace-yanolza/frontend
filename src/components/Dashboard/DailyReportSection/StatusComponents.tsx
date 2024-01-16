import styled from '@emotion/styled';

import statusImage01 from '/images/ic-dailyReport-status01.png';
import statusImage02 from '/images/ic-dailyReport-status02.png';
import statusImage03 from '/images/ic-dailyReport-status03.png';
import statusImage04 from '/images/ic-dailyReport-status04.png';

export const StatusComponent01 = () => (
  <Container>
    <ImageContainer>
      <img
        src={statusImage01}
        alt="status-image01"
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

export const StatusComponent02 = () => (
  <Container>
    <ImageContainer>
      <img
        src={statusImage02}
        alt="status-image02"
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

export const StatusComponent03 = () => (
  <Container>
    <ImageContainer>
      <img
        src={statusImage03}
        alt="status-image03"
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

export const StatusComponent04 = () => (
  <Container>
    <ImageContainer>
      <img
        src={statusImage04}
        alt="status-image04"
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

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
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

  font-size: 15px;
  font-weight: 700;
  line-height: 1.4;
`;

const AlarmSubText = styled.div`
  width: 100%;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
`;

const AlarmColoredText = styled.span`
  color: #ff3478;
`;
