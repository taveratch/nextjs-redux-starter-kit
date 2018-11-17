import AuthApi from 'services/authApi'
import redirect from 'lib/redirect'
import resolver from 'lib/resolver'
import session from 'lib/auth/session'

const ADMIN_SIGNIN_PATH = '/admin/signin'
const ADMIN_PATH = '/admin'
const TOKEN_KEY = 'jwt'

class Auth {

  signedIn = false
  
  signIn(username, password) {
    const authApi = new AuthApi()
    return resolver(authApi.signIn(username, password))
    .then(res => {
      if(res.ok) {
        session.setCookie(TOKEN_KEY, res.body.jwt)
        redirect(ADMIN_PATH)
      }
      return res
    })
  }

  getToken(ctx) {
    return session.getCookie(TOKEN_KEY, ctx)
  }

  async verifyToken(ctx) {
    const authApi = new AuthApi()
    const token = this.getToken(ctx)
    if(!token) return redirect(ADMIN_SIGNIN_PATH, ctx)
    const res = await resolver(authApi.verifyToken(ctx))
    if(!res.ok) return redirect(ADMIN_SIGNIN_PATH, ctx)
    return res.body
  }

  async redirectIfAuthenticated(ctx) {
    // const {ok, statusCode, body} = await this.verifyToken(ctx)
    const token = await this.verifyToken(ctx)
    if(!token) {
      redirect(ADMIN_SIGNIN_PATH, ctx)
      return false
    }
    return true
  }

  signOut() {
    session.removeCookie()
    redirect(ADMIN_SIGNIN_PATH)
  }

  isSignedIn() {
    return this.signedIn
  }

  // called on client-side only
  getCU(ctx) {
    return this.verifyToken(ctx)
  }
}

const auth = new Auth()
export default auth