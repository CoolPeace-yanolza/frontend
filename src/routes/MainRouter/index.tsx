import { Route, Routes } from 'react-router-dom';
import Dashboard from '@pages/Dashboard.tsx';

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard />}
      />
      <Route
        path="/login"
        element={<p style={{ fontSize: '5rem' }}>로그인페이지</p>}
      />
      <Route
        path="/signup"
        element={<p style={{ fontSize: '5rem' }}>회원가입페이지</p>}
      />
    </Routes>
  );
};

export default MainRouter;
