import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components/common';
import Dashboard from '@pages/Dashboard.tsx';
import Report from '@pages/Report.tsx';

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <p style={{ fontSize: '1rem' }}>🧃 로그인 페이지 입주 예정 🧃</p>
        }
      />
      <Route
        path="/signup"
        element={
          <p style={{ fontSize: '1rem' }}>🧃 회원가입 페이지 입주 예정 🧃</p>
        }
      />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/coupons"
          element={
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem'
              }}
            >
              🧃 쿠폰 조회 페이지 입주 예정 🧃
            </div>
          }
        />
        <Route
          path="/coupons/register"
          element={
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem'
              }}
            >
              🧃 쿠폰 등록 페이지 입주 예정 🧃
            </div>
          }
        />
        <Route
          path="/settlements"
          element={
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem'
              }}
            >
              🧃 정산관리 페이지 입주 예정 🧃
            </div>
          }
        />
        <Route
          path="/report"
          element={<Report />}
        />
      </Route>
    </Routes>
  );
};

export default MainRouter;
