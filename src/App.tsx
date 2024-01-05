import GlobalStyle from '@styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './routes';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
