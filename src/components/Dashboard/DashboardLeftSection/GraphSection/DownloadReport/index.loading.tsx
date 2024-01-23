import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Container>
      <TitleLoading />
      <InnerContainer>
        <StatusLoadingWrapper>
          <StatusItemLoading />
          <StatusItemLoading />
        </StatusLoadingWrapper>
        <MainContentLoading />
      </InnerContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  margin: none;
  padding: none;
  border-radius: 12px;

  background-color: #f2f4f5;
`;

const TitleLoading = styled(BaseSkeleton)`
  width: 40%;
  height: 30px;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 300px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StatusLoadingWrapper = styled.div`
  width: 100%;

  flex: 1;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const StatusItemLoading = styled(BaseSkeleton)`
  width: 130px;
  height: 130px;

  flex: 1;
`;

const MainContentLoading = styled(BaseSkeleton)`
  width: 100%;
  height: 150px;

  flex: 1.5;
`;
