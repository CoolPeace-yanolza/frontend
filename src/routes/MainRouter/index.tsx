// import CouponList from '@pages/CouponList';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@components/common';
import CouponList from '@pages/CouponList';
import CouponExpired from '@components/CouponList/CouponItem/CouponExpired';
import CouponExpose from '@components/CouponList/CouponItem/CouponExpose';
import CouponStop from '@components/CouponList/CouponItem/CouponStop';

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
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
            <CouponExpired />
            <CouponExpose />
            <CouponStop />
            <CouponExpired />
          </div>
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
          element={<div style={{}}>🧃 대시보드 페이지 입주 예정 🧃</div>}
        />
        <Route
          path="/coupons"
          element={<CouponList />}
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
