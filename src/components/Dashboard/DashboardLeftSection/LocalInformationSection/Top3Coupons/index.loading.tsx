import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <InnerContainer>
        <RankingSectionLoading />
      </InnerContainer>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 16px;
  border-radius: 16px;

  background-color: #fafafb;

  ${theme.response.tablet} {
    height: 200px;
  }
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  margin: none;
  padding: none;
  border-radius: 12px;

  background-color: #f2f4f5;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 16px;

  display: flex;
  justify-content: flex-end;

  background-color: #fff;
`;

const RankingSectionLoading = styled(BaseSkeleton)`
  width: 180px;
  height: 100%;

  flex: 1;

  background-color: #f2f4f5;

  ${theme.response.tablet} {
    width: 40vw;
  }
`;
