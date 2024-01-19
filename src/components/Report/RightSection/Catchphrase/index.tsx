import styled from '@emotion/styled';

import rocket from '@assets/icons/ic-catchphrase-rocket.svg';

const Catchphrase = () => {
  return (
    <Container>
      <Content>
        <Title>
          {'나의 누적 쿠폰'}
          <br />
          {'사용량은?'}
        </Title>
        <Text>
          {'연도별 쿠폰 사용 현황을'}
          <br />
          {'빠르게 확인해보세요!'}
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

const Container = styled.div`
  position: relative;

  width: 95%;
  height: 180px;

  border-radius: 20px 65px 0px 65px;

  background-color: white;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  width: 100%;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.span`
  font-size: 17px;
  font-weight: 700;

  line-height: 144%;
`;

const Text = styled.span`
  color: #415574;
  font-size: 13px;
  font-weight: 700;

  line-height: 145%;
`;

const RocketIcon = styled.img`
  position: absolute;

  right: 0;
  bottom: -50px;

  width: 120px;
  max-height: 120px;
`;
