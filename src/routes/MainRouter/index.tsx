import { Route, Routes } from 'react-router-dom';

import { Layout } from '@components/common';
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
