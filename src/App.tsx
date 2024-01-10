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
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';
import { ErrorApp } from '@components/ErrorFallback';
import { LoadingApp } from '@components/Loading';

const queryClient = new QueryClient();

/* HACK: logError 논의 필요

  const logError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error, e.g. log to an external API
  };
  
 */

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary
            onReset={reset}
            FallbackComponent={ErrorApp}

            /* HACK: logError 논의 필요

              onError={logError}

            */
          >
            <Suspense fallback={<LoadingApp />}>
              <BrowserRouter>
                <MainRouter />
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
