import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Container>
      <Title />
      <ContentsWrapper>
        <Contents count={4} />
      </ContentsWrapper>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;
`;

const Title = styled(BaseSkeleton)`
  width: 60%;

  margin: 10px 0 20px 0;
  padding: 5px 0;

  border-radius: 12px;
`;

const ContentsWrapper = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Contents = styled(BaseSkeleton)`
  height: 100px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`;
