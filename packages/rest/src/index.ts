import Router from '@koa/router';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { korean } from './routes/korean';

export const app = new Koa();
const router = new Router();

app.use(bodyParser());

// Subroutes
router.use('/korean', korean.routes());

app.use(router.routes());

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
