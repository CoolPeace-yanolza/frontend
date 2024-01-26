import { useEffect } from 'react';
import styled from '@emotion/styled';

import { BackdropProps } from '@/types/register';

const Backdrop = ({
  backdropRef,
  onBackdropClick,
  children
}: BackdropProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onBackdropClick) {
      onBackdropClick(e);
    }
  };

  return (
    <Container
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      {children}
    </Container>
  );
};

export default Backdrop;

const Container = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(66, 66, 66, 0.5);

  z-index: 110;
`;
