import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

import { MainRouter } from './routes';
import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import ErrorFallback from './App.error';
import Loading from './App.loading';
import { ToastProvider } from '@components/common/ToastContext';

const queryClient = new QueryClient();

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ErrorFallback}
          >
            <Suspense fallback={<Loading />}>
              <BrowserRouter>
                <ToastProvider>
                  <MainRouter />
                </ToastProvider>
              </BrowserRouter>
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default App;
