import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import theme from '@styles/theme';
import settlementsFrame from '@assets/icons/settlements-data-frame.svg'; 

const Loading = () => {

  const [show, setShow] = useState(true);  

  useEffect(() => {
    let timeout = setTimeout(() => setShow(false), 30000); 
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <Container>
      <Header>
      </Header>
      <Frame></Frame>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  height: 558px;

  margin-left: 43px;
  margin-right: 43px;
  margin-top: 95px;
  margin-bottom: 90px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  background: none;

  .react-loading-skeleton {
    --base-color: rgba(17, 31, 63, 1);
  }

  ${theme.response.tablet} {
    height: 100%;
  }
`;

const Header = styled(Skeleton)`
  height: 54px;

  border-radius: 12px;

  background-color: rgba(255, 255, 255, 0.05);
  
  box-shadow: inset 0px 0px 5px rgba(205, 207, 208, 0.5), 0px 0px 5px rgba(0, 0, 0, 0.5);

  ${theme.response.tablet} {
    display: none;
  }
`;


const Frame = styled(Skeleton)`
width: 100%;
height: 500px;

margin-left: auto;
margin-right: auto;

position: relative; 

background: url(${settlementsFrame});

  .react-loading-skeleton {
    --base-color: #ebebeb;
  }

  ${theme.response.tablet} {
    background: none;
  }
`;