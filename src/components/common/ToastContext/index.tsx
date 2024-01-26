import styled from '@emotion/styled';

import theme from '@styles/theme';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FunctionComponent
} from 'react';

interface ToastContextType {
  showToast: (msg: ReactNode, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: FunctionComponent<ToastProviderProps> = ({
  children
}) => {
  const [message, setMessage] = useState<ReactNode>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showToast = (msg: ReactNode, duration: number = 2000) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isVisible && <ToastContainer>{message}</ToastContainer>}
    </ToastContext.Provider>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  line-height:20px;

  width: 336px;
  height: 90px;
  padding: 24px 28px;

  border-radius: 5px;

  background: #404446;
  color: ${theme.colors.white};

    p {
      color: #65a6eb;
      font-size: 15px;
      text-decoration-line: underline;
      cursor: pointer;
      margin-left:54px;
    }
  }
`;
