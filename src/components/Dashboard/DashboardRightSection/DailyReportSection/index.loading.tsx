import styled from '@emotion/styled';

const Loading = () => {
  return (
    <Container>
      <Title>로딩중!</Title>
      <Description>일간 리포트 로딩중~~~</Description>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 45%;
  min-height: 379px;

  margin-top: 17px;
  padding: 38.5px 15px 10px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 700;
`;

const Description = styled.div`
  padding: 10px 0px;

  color: #6c7072;
  font-size: 13.005px;
  font-weight: 700;
`;
