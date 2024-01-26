import styled from '@emotion/styled';
import theme from '@styles/theme';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <Container>
      <Title />
      <ContentsWrapper>
        <ContentsTop count={2} />
        <ContentsBottom count={2} />
      </ContentsWrapper>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 619.13px;

  margin-left: 43px;
  margin-right: 43px;
  margin-top: 20px;
  padding: 30px 15px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;

  background-color: white;

  ${theme.response.tablet} {
    max-height: 250px;

    margin: 20px;
    padding: 15px 15px;
    border-radius: 10px;

    gap: 15px;

    background-color: #f2f4f5;
  }
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

  ${theme.response.tablet} {
    width: 30%;

    margin-bottom: 15px;
    border-radius: 7px;
    padding-bottom: 5px;
  }
`;

const ContentsWrapper = styled.div`
  width: 100%;

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  ${theme.response.tablet} {
    border-radius: 10px;

    gap: 5px;
  }
`;

const ContentsTop = styled(BaseSkeleton)`
  height: 100px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  flex: 1;

  ${theme.response.tablet} {
    width: 100%;
    height: 50px;
  }
`;

const ContentsBottom = styled(BaseSkeleton)`
  height: 100px;

  padding: 10px;

  display: flex;
  flex-direction: column;
  flex: 1;

  ${theme.response.tablet} {
    display: none;
  }
`;
