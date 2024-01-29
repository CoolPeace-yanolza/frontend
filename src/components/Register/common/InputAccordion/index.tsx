import { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import theme from '@styles/theme';
import { InputAccordionProps, ButtonStyleProps } from '@/types/register';
import toggle from '@assets/icons/ic-register-toggle.svg';

const InputAccordion = ({ title, value, children }: InputAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (contentWrapperRef.current && contentRef.current) {
      contentWrapperRef.current.style.height = isOpen
        ? '0px'
        : `${contentRef.current.clientHeight}px`;
      setIsOpen(prev => !prev);
    }
  };

  useEffect(() => {
    if (value) {
      if (contentWrapperRef.current && contentRef.current) {
        contentWrapperRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
      setIsOpen(true);
    }
  }, []);

  return (
    <Container>
      <Header>
        <Description>{title}</Description>
        <Button
          $isOpen={isOpen}
          onClick={handleToggle}
        >
          <img
            src={toggle}
            alt="아코디언 토글 아이콘"
          />
        </Button>
      </Header>
      <ContentWrapper ref={contentWrapperRef}>
        <Content ref={contentRef}>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default InputAccordion;

const Container = styled.div`
  width: 100%;

  margin-bottom: 30px;
  padding: 24px;
  border: 1px solid #cdcfd0;
  border-radius: 16px;

  display: flex;
  flex-direction: column;

  ${theme.response.tablet} {
    margin-bottom: 20px;
    padding: 17px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  color: #979c9e;
  font-size: 15px;

  ${theme.response.tablet} {
    font-size: 2vw;
  }

  @media (max-width: 550px) {
    font-size: 11px;
  }
`;

const Button = styled.button<ButtonStyleProps>`
  width: 24px;
  height: 24px;

  padding: 0px;
  border: none;

  background: #fff;

  transform: rotate(
    ${props => {
      return props.$isOpen ? '180deg' : '0';
    }}
  );
  transition: 0.4s;

  cursor: pointer;
`;

const ContentWrapper = styled.div`
  height: 0px;

  overflow: hidden;

  transition: 0.4s;
`;

const Content = styled.div`
  padding-top: 20px;

  ${theme.response.tablet} {
    padding-top: 2vw;
  }
`;
