// src/context/ToastContext.tsx
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
  showToast: (msg: string) => void;
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
  const [message, setMessage] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setMessage(msg);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 2000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {isVisible && (
        <ToastContainer>
          <p>{message}</p>
        </ToastContainer>
      )}
    </ToastContext.Provider>
  );
};

const ToastContainer = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 70;

  border-radius: 5px;

  background: #404446;

  p {
    padding: 15px 31px;

    font-size: 15px;
    color: ${theme.colors.white};
  }
`;
