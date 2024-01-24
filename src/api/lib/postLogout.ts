// import { AxiosError } from 'axios';

import { instance } from '..';

const postLogout = async () => {
  await instance.post('/v1/member/logout');

  /* HACK: 로그아웃 에러 response 가 있을 경우 사용

  try {
    const response = await instance.post('/v1/member/logouts');
    return response;
  } catch (error) {
    if (error instanceof AxiosError) error.response;
  }

  */
};

export default postLogout;
