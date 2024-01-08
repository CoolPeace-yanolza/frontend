import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components/common';

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/signup"
        element={<SignUp />}
      />
      <Route element={<Layout />}>
        <Route
          path="/"
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
              🧃 대시보드 페이지 입주 예정 🧃
            </div>
          }
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
      </Route>
    </Routes>
  );
};

export default MainRouter;
