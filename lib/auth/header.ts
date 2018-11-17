import session from './session'

export const withAuthHeader = (options: any, ctx: any) => {
  return { ...options, headers: {Authorization: `Bearer ${session.getCookie('jwt', ctx)}`}}
}