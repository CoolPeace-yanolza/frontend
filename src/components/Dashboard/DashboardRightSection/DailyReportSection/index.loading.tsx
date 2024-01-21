import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Container>
      <Header>
        <Title />
        <Description />
      </Header>
      <InnerContainer>
        <SubContentLoading />
        <MainContentLoading />
      </InnerContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 250px;
  height: 45%;
  min-height: 379px;

  margin-top: 17px;
  padding: 30px 10px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: white;
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  margin: none;
  padding: none;
  border-radius: 12px;

  background-color: #f2f4f5;
`;

const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

const Title = styled(BaseSkeleton)`
  width: 60%;
  height: 40px;
`;

const Description = styled(BaseSkeleton)`
  width: 100%;
  height: 15px;
`;

const InnerContainer = styled.div`
  min-height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SubContentLoading = styled(BaseSkeleton)`
  width: 150px;
  height: 120px;

  display: flex;
  align-self: center;

  padding: none;
  margin: none;
`;

const MainContentLoading = styled(BaseSkeleton)`
  width: 200px;
  height: 130px;

  padding: none;
  margin: none;
`;
