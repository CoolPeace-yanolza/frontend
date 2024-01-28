import { SetCookies, GetCookies } from '@/types/auth';

export const setCookies: SetCookies = (name, value, expiresIn) => {
  try {
    document.cookie = `${name}=${value};max-age=${expiresIn};path=/;secure`;
    console.log(`${name}: 쿠키설정 성공`);
  } catch (error) {
    console.log(error);
    alert(`${name}: 쿠키설정에 실패했습니다.`);
  }
};

export const getCookies: GetCookies = name => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1];
  return cookieValue;
};

export const deleteAllCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    const [name] = cookie.trim().split('=');
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
  });
};
