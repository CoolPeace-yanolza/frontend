import styled from '@emotion/styled';

import reportIcon from '/images/ic-dashboard-couponRate.png';
import { CouponRateResult } from '@/types/dashboard';

const CouponRate = ({ result }: CouponRateResult) => {
  return (
    <Container>
      <Title>쿠폰 예약율을 한눈에!</Title>
      <Description>
        쿠폰을 다운받은 고객들의
        <br />
        예약 전환율을 분석해드릴게요
      </Description>
      <ResultContainer>현재 10명 중 {result}명이 예약 했어요!</ResultContainer>
      <Icon src={reportIcon}></Icon>
    </Container>
  );
};

export default CouponRate;

const Container = styled.div`
  position: relative;

  width: 100%;

  padding: 20px;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #fff;

  box-shadow:
    0px 17.525px 21.907px 0px rgba(0, 0, 0, 0.05),
    -0.73px 0.73px 0.73px -1.46px rgba(255, 255, 255, 0.35) inset;
`;

const Icon = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
`;

const Title = styled.div`
  padding: 10px 0;

  color: #202325;
  font-size: 17px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #415574;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.4;
`;

const ResultContainer = styled.div`
  width: 100%;

  margin: 15px 0;
  padding: 15px;
  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f7f8fc;

  color: #303437;
  font-size: 14px;
  font-weight: 700;
`;