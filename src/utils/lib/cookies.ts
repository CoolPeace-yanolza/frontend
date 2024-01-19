import { SetCookies, GetCookies } from '@/types/auth';

export const setCookies: SetCookies = (
  userName,
  userEmail,
  accessToken,
  refreshToken,
  expiresIn
) => {
  try {
    document.cookie = `userName=${userName};max-age=${expiresIn};path=/;secure`;
    document.cookie = `userEmail=${userEmail};max-age=${expiresIn};path=/;secure`;
    document.cookie = `accessToken=${accessToken};max-age=${expiresIn};path=/;secure`;
    document.cookie = `refreshToken=${refreshToken};max-age=${expiresIn};path=/;secure`;
    console.log('쿠키설정 성공');
  } catch (error) {
    console.log(error);
    alert('쿠키설정에 실패했습니다.');
  }
};

export const getCookies: GetCookies = name => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1];
  return cookieValue;
};
