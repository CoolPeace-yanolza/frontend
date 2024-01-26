import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <TitleLoading />
      <GraphLoading />
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

  ${theme.response.tablet} {
    border-radius: 10px;

    background-color: #fafafb;
  }
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

  ${theme.response.tablet} {
    height: 20px;
  }
`;

const GraphLoading = styled(BaseSkeleton)`
  width: 100%;
  height: 340px;

  ${theme.response.tablet} {
    height: calc(100vw / 2);
  }
`;
