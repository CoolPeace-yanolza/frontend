import { Layout } from '@components/common';
import { getCookies } from '@utils/lib/cookies';
import { Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  const isLoggedIn = !!getCookies('accessToken');

  if (!isLoggedIn) {
    // HACK : alert창은 추후 변경 예정입니다.
    alert('로그인이 필요한 기능입니다.');
    return <Navigate to="/login" />;
  }
  return <Layout />;
};

export default PrivateRouter;
