import { Navigate, Outlet } from 'react-router-dom';

import { getCookies } from '@utils/lib/cookies';

const PublicRouter = () => {
  const accessToken = getCookies('accessToken');
  const refreshToken = getCookies('refreshToken');
  const userName = getCookies('userName');
  const userEmail = getCookies('userEmail');

  const isLoggedIn =
    !!accessToken && !!refreshToken && !!userName && !!userEmail;

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRouter;
