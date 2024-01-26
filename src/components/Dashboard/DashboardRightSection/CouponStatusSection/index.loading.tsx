import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <Header />
      <InnerContainer>
        <LoadingContent />
        <LoadingContent />
        <LoadingContent />
      </InnerContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 55%;
  min-height: 481px;

  border-radius: 20px;
  padding: 30px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background-color: white;

  ${theme.response.tablet} {
    min-height: auto;
    height: auto;

    padding: 10px;

    gap: 10px;
  }
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 12px;

  background-color: #f2f4f5;
`;

const Header = styled(BaseSkeleton)`
  width: 130px;
  height: 30px;

  flex: 2;

  border-radius: 12px;

  ${theme.response.tablet} {
    border-radius: 8px;
  }
`;

const InnerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex: 6;

  ${theme.response.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LoadingContent = styled(BaseSkeleton)`
  width: 100%;
  height: 120px;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${theme.response.tablet} {
    width: 29vw;
    height: 40px;

    border-radius: 10px;

    flex-direction: row;
    justify-content: space-between;
  }
`;
