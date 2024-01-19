// import CouponList from '@pages/CouponList';
import { Route, Routes } from 'react-router-dom';

import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Dashboard from '@pages/Dashboard';
import Report from '@pages/Report';
import CouponList from '@pages/CouponList';
import Register from '@pages/Register';
import { PrivateRouter, PublicRouter } from '..';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRouter />}>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
      </Route>
      <Route element={<PrivateRouter />}>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/coupons"
          element={<CouponList />}
        />
        <Route
          path="/coupons/register"
          element={<Register />}
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
          path="/coupons/report"
          element={<Report />}
        />
      </Route>
    </Routes>
  );
};

export default MainRouter;
