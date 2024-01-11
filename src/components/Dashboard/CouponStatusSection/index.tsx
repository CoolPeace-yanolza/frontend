import styled from '@emotion/styled';

const CouponStatusSection = () => {
  return (
    <Container>
      <Header>
        <Title>똑똑현황</Title>
      </Header>
      <InnerContainer>쿠폰 현황</InnerContainer>
    </Container>
  );
};

export default CouponStatusSection;

const Container = styled.div`
  height: 481px;

  padding: 29px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;
`;

const Header = styled.div`
  width: 100%;
`;

const Title = styled.div`
  padding: 16px 0;

  font-size: 17px;
  font-weight: 700;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
