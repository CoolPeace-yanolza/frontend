import styled from '@emotion/styled';

const DownLoadReport = () => {
  return (
    <Container>
      <Header>
        <Title>다운로드 리포트</Title>
      </Header>
      <InnerContainer></InnerContainer>
    </Container>
  );
};

export default DownLoadReport;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 32px 0 16px 0;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const Title = styled.span`
  color: #484e59;
  font-size: 18px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 20px;

  background-color: #fafafb;
`;
