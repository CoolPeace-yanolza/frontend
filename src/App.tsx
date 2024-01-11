import GlobalStyles from '@styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from './routes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
