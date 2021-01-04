const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // 메인 라우터에 api 라우트 적용

// 라우터 적용 전에 bodyParser 적용 (router를 적용하는 코드의 윗부분에서 해야하므로)
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
})