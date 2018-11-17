import Router from 'next/router'

export default (target: string, ctx: any = {}) => {
  if (ctx.res) {
    ctx.res.writeHead(302, {
      Location: target
    })
    ctx.res.end()
    // do not redirect here. Express in SSR will take care of redirecting. server.js
  } else {
    Router.push(target)
  }
}