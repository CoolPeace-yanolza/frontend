import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

import { MainRouter } from './routes';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';
import { FallbackApp } from '@components/ErrorFallback';
import { LoadingApp } from '@components/Loading';

const queryClient = new QueryClient();

/* HACK: logError 논의 필요

  const logError = (error: Error, info: { componentStack: string }) => {
    // Do something with the error, e.g. log to an external API
  };
  
 */

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ErrorBoundary
            FallbackComponent={FallbackApp}

            /* HACK: onReset 구현 방식 찾는 중, logError 논의 필요
            
            onReset={details => {
              // Reset the state of your app so the error doesn't happen again
            }}
            
            // onError={logError}

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
