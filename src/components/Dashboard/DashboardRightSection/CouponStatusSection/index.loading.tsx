import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <LoadingContent count={3} />
      </InnerContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 55%;
  max-height: 481px;

  border-radius: 20px;
  padding: 30px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background-color: white;
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 12px;

  background-color: #f2f4f5;
`;

const Header = styled(BaseSkeleton)`
  width: 130px;
  height: 40px;

  border-radius: 12px;
`;

const LoadingContent = styled(BaseSkeleton)`
  width: 100%;
  height: 112px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;
