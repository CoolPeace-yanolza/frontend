import { getCookies } from '@utils/lib/cookies';
import { instance } from '..';

const postRefreshToken = async () => {
  const refreshToken = getCookies('refreshToken');

  const response = await instance.post('/v1/member/refresh', {
    refresh_token: refreshToken
  });

  return response;
};

export default postRefreshToken;
