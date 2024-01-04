import GlobalStyle from '@styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routes/MainRouter';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
