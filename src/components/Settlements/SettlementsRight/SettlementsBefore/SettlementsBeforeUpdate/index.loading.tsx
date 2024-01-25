import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <ContentsWrapper>
        <ContentsTop />
      </ContentsWrapper>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
width: 100%;
height: 72.67px;

margin-top: 20px;
padding-top: 15px;
border: 1px solid white;
border-radius: 5px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: white;

  ${theme.response.tablet} {    
    border-radius: 5px;

    gap: 15px;

    background-color: #f2f4f5;
  }
`;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;
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
  padding-top: 10px;
  margin-top: auto;
  margin-bottom: auto;

  display: flex;
  flex-direction: column;
  flex: 1;

  ${theme.response.tablet} {
    width: 100%;
    height: 50px;
  }
`;