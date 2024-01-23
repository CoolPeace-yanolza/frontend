import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';

const Loading = () => {
  return (
    <Container>
      <Sidebar />
      <Section>
        <Header />
        <OutletLayout />
      </Section>
    </Container>
  );
};

export default Loading;

const BaseSkeleton = styled(Skeleton)`
  width: 100%;

  border-radius: 16px;

  background-color: #f2f4f5;
`;

const Container = styled.div`
  position: relative;

  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  max-height: 100vh;

  display: flex;

  background-color: white;
  overflow: hidden;
`;

const Sidebar = styled(BaseSkeleton)`
  position: fixed;

  width: 100px;
  min-height: 100%;

  overflow: hidden;

  ${theme.response.tablet} {
    display: none;
  }
`;

const Section = styled.div`
  --sidebar-width: 100px;

  width: 100%;
  min-width: calc(100vh - var(--sidebar-width));
  height: 100vh;

  margin-left: var(--sidebar-width);
  padding: 0 22px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    min-width: 0;

    margin-left: 0;
    padding: 0 15px;
  }
`;

const Header = styled(BaseSkeleton)`
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  height: 85px;

  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${theme.response.tablet} {
    height: 65px;

    border-radius: 10px;
  }
`;

const OutletLayout = styled(BaseSkeleton)`
  width: 100%;
  height: 85vh;
  max-height: 85vh;

  margin-top: 16px;
  border-radius: 20px;

  ${theme.response.tablet} {
    margin-top: 15px;

    margin-top: 0;
    border-radius: 10px;
  }
`;
