import Cookies from 'js-cookie';

export function setCookieItem(
  key: string,
  value: unknown,
  expireTimeInDays = 365,
): void {
  Cookies.set(key, value, {
    expires: expireTimeInDays,
    path: '/',
  });
}

export function removeCookieItem(key: string): void {
  Cookies.remove(key, {
    path: '/',
  });
}

export function removeAllCookie(): void {
  const allCookies = Cookies.get();
  Object.entries(allCookies).forEach((cookie) => {
    removeCookieItem(cookie[0]);
  });
}

export function getCookieItem(key: string): string {
  return Cookies.get(key);
}
