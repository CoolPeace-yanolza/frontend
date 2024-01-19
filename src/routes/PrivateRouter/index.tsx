import { Navigate } from 'react-router-dom';

import { Layout } from '@components/common';
import { getCookies } from '@utils/lib/cookies';

const PrivateRouter = () => {
  const accessToken = getCookies('accessToken');
  const refreshToken = getCookies('refreshToken');
  const userName = getCookies('userName');
  const userEmail = getCookies('userEmail');

  const isLoggedIn =
    !!accessToken && !!refreshToken && !!userName && !!userEmail;

  if (!isLoggedIn) {
    // HACK : alert창은 추후 변경 예정입니다.
    alert('로그인이 필요한 기능입니다.');
    return <Navigate to="/login" />;
  }
  return <Layout />;
};

export default PrivateRouter;
