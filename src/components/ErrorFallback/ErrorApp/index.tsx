import { FallbackProps } from 'react-error-boundary';

const ErrorApp = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      onClick={resetErrorBoundary}
    >
      <p>App 에러 발생</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  );
};

export default ErrorApp;
