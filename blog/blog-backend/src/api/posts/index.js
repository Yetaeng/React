// posts 라우트 생성
const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');

const posts = new Router();

const printInfo = ctx => {
    ctx.body = {
        method: ctx.method,
        path: ctx.path,
        params: ctx.params,
    };
};

// 문자열이 아닌 JSON 객체를 반환하도록 함
posts.get('/', printInfo);
posts.post('/', printInfo);
posts.get('/:id', printInfo);
posts.delete('/:id', printInfo);
posts.put('/:id', printInfo);
posts.patch('/:id', printInfo);
module.exports = posts;