import { Route, Routes } from 'react-router-dom';

import { PrivateRouter, PublicRouter } from '..';
import Login from '@pages/Login';
import SignUp from '@pages/SignUp';
import Dashboard from '@pages/Dashboard';
import Report from '@pages/Report';
import CouponList from '@pages/CouponList';
import Register from '@pages/Register';
import Settlements  from '@pages/Settlements';

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
          element={<Settlements />}
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
