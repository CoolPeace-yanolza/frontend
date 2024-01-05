import { Route, Routes } from 'react-router-dom';

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<p style={{ fontSize: '5rem' }}>메인페이지</p>}
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
