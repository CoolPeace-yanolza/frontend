import styled from '@emotion/styled';

import theme from '@styles/theme';
import { ErrorMessageProps } from '@/types/register';

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <MessageWrapper>{children}</MessageWrapper>;
};

export default ErrorMessage;

const MessageWrapper = styled.div`
  margin-top: 20px;

  color: #da1e28;
  font-size: 12px;
  font-weight: 400;

  ${theme.response.tablet} {
    font-size: 1.5vw;
  }

  @media (max-width: 550px) {
    font-size: 9px;
  }
`;
