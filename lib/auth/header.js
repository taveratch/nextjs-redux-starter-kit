import session from './session'

export const withAuthHeader = (options, ctx) => {
  return { ...options, headers: {Authorization: `Bearer ${session.getCookie('jwt', ctx)}`}}
}