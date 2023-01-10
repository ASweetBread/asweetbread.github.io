import Koa from 'koa';
import Router from 'koa-router'

const app = new Koa();
// const router = new Router();

// router.get('/tagsoptions',async (ctx)=>{

//   ctx.body="这是一个新闻页面"
// })
// /*启动路由*/
// app.use(router.routes())   
//   .use(router.allowedMethods());
app.use(async ctx => {
  ctx.body = 'Hello World';
});

if (import.meta.env.PROD)
  app.listen(3000);

export const viteNodeApp = app;