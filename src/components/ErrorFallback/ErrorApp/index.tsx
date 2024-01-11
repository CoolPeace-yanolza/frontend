import { FallbackProps } from 'react-error-boundary';

const ErrorApp = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <span>App 전체 에러 발생</span>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
};

export default ErrorApp;
