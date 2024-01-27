import styled from '@emotion/styled';

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
`;
