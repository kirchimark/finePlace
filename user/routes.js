const Router = require('koa-router');
const db = require('../db/db');

const router = new Router();
router.post('/user/create', async ctx => {
  console.log('work as good clock', ctx.request.body)

  ctx.body = 'hello\n';
})

module.exports = router.routes();