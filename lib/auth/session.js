import cookie from 'js-cookie'

const getCookieFromServer = (key, {req}) => {
  if(!req) return undefined
  if (!req.headers.cookie) {
    return undefined;
  }
  
  const rawCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split("=")[1];
}

const getCookieFromBrowser = key => {
  return cookie.get(key)
}

export default {
  setCookie: (key, value) => cookie.set(key, value, {path: '/'}),

  getCookie: (key, ctx = {}) => process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, ctx),

  removeCookie: key => cookie.remove(key)
}