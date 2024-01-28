import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import rocket from '/images/ic-catchphrase-rocket.png';
import theme from '@styles/theme';

const Catchphrase = () => {
  return (
    <Container>
      <Content>
        <Title>
          <span>나의 누적 쿠폰</span>
          <span>사용량은?</span>
        </Title>
        <Text>
          <span>연도별 쿠폰 사용 현황을</span>
          <span>
            <span>빠르게</span>확인해보세요!
          </span>
        </Text>
        <RocketIcon
          src={rocket}
          alt="로켓"
        />
      </Content>
    </Container>
  );
};

export default Catchphrase;

const rocketRising = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-300px) translateY(50px) rotate(90deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(0deg);
  }
`;

const Container = styled.div`
  position: relative;

  width: 95%;
  height: 180px;

  border-radius: 20px 65px 0px 65px;

  background-color: white;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);

  ${theme.response.tablet} {
    width: 90%;
    height: auto;

    border-radius: 10px 30px 0px 30px;

    box-shadow: 1px 1px 1.5px 0px rgba(0, 0, 0, 0.25);
  }
`;

const Content = styled.div`
  width: 100%;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${theme.response.tablet} {
    padding: 15px 30px;

    gap: 2px;
  }
`;

const Title = styled.p`
  display: flex;
  flex-direction: column;

  font-size: 17px;
  font-weight: 700;
  line-height: 144%;

  ${theme.response.tablet} {
    font-size: 14px;

    display: flex;
    flex-direction: row;
    gap: 3px;
  }
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;

  color: #415574;
  font-size: 13px;
  font-weight: 700;
  line-height: 145%;

  & > span > span {
    margin-right: 3px;

    display: inline;

    box-shadow: inset 0 -7px 0 #ffddf9;
  }

  ${theme.response.tablet} {
    margin-left: 2px;

    display: flex;
    flex-direction: row;
    gap: 3px;

    font-size: 13px;
  }
`;

const RocketIcon = styled.img`
  position: absolute;

  right: 0;
  bottom: -20px;

  width: 120px;
  max-height: 120px;

  animation: ${rocketRising} 1s;

  ${theme.response.tablet} {
    width: 65px;
    max-height: 65px;
  }
`;
