import { useState, useRef } from 'react';
import styled from '@emotion/styled';

import { InputAccordionProps, ButtonStyleProps } from '@/types/register';
import toggle from '@assets/icons/ic-register-toggle.svg';

const InputAccordion = ({ title, children }: InputAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (contentWrapperRef.current && contentRef.current) {
      if (isOpen) {
        contentWrapperRef.current.style.height = '0px';
      } else {
        contentWrapperRef.current.style.height = `${contentRef.current.clientHeight}px`;
      }
      setIsOpen(prev => !prev);
    }
  };

  return (
    <Container>
      <Header>
        <Description>{title}</Description>
        <Button
          $isOpen={isOpen}
          src={toggle}
          onClick={handleToggle}
        />
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
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  color: #979c9e;
  font-size: 15px;
`;

const Button = styled.button<ButtonStyleProps>`
  width: 24px;
  height: 24px;

  padding: 0px;
  border: none;

  background: url(${props => props.src});

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
`;
