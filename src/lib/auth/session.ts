import cookie from 'js-cookie'

const getCookieFromServer = (key: string, {req}: any) => {
  if(!req) return undefined
  if (!req.headers.cookie) {
    return undefined;
  }
  
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c:string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
}

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key)
}

export default {
  setCookie: (key: string, value: string) => cookie.set(key, value, {path: '/'}),

  getCookie: (key: string, ctx = {}) => process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, ctx),

  removeCookie: (key: string) => cookie.remove(key)
}