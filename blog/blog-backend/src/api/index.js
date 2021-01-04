// 라우트 모듈화

const Router = require('koa-router');
const posts = require('./posts')

const api = new Router();

api.use('/posts', posts.routes()); // posts 라우트를 불러와서 설정해줌

// 라우터를 내보냅니다.
module.exports = api;