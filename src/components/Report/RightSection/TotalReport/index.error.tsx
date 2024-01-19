import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <div>
        <span>누적 똑똑 현황 에러 발생</span>
        <span>{error.message}</span>
        <button onClick={resetErrorBoundary}>다시 시도</button>
      </div>
    </div>
  );
};

export default ErrorFallback;
