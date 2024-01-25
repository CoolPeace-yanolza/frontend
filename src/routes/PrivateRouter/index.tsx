import { Navigate, useLocation } from 'react-router-dom';

import { Layout } from '@components/common';
import { getCookies } from '@utils/lib/cookies';

const PrivateRouter = () => {
  const location = useLocation();

  const accessToken = getCookies('accessToken');
  const refreshToken = getCookies('refreshToken');
  const userName = getCookies('userName');
  const userEmail = getCookies('userEmail');

  const isLoggedIn =
    !!accessToken && !!refreshToken && !!userName && !!userEmail;

  if (!isLoggedIn) {
    // HACK: #64 PR 머지된 후에 모달로 수정 예정 (portal 사용)
    alert('로그인이 필요한 기능입니다.');
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
      />
    );
  }

  return <Layout />;
};

export default PrivateRouter;
