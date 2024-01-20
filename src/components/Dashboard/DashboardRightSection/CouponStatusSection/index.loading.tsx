import styled from '@emotion/styled';

const Loading = () => {
  return (
    <Container>
      <Header>
        <Title>로딩중!</Title>
      </Header>
      <InnerContainer />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 55%;
  min-height: 481px;

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

  padding: 0px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
