import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <Header>
        <TitleLoading />
        <SubTitleLoading />
      </Header>
      <InnerContainer />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;

  ${theme.response.tablet} {
    gap: 0px;

    border-radius: 10px;

    padding: 10px;

    background-color: #fafafb;
  }
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;
`;

const Header = styled.div`
  width: 100%;
  height: 30%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleLoading = styled(BaseSkeleton)`
  width: 80%;
  height: 30px;

  margin: 0;
  padding: 0;

  ${theme.response.tablet} {
    height: 20px;
  }
`;

const SubTitleLoading = styled(BaseSkeleton)`
  width: 40%;
  height: 20px;

  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;

  ${theme.response.tablet} {
    height: 10px;
  }
`;

const InnerContainer = styled(BaseSkeleton)`
  height: 180px;

  ${theme.response.tablet} {
    height: 120px;
  }
`;
