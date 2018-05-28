const Router = require('koa-router');
const mongoose = require('mongoose');
const db = require('../db/db');
const consts = require('./consts');
const validation = require('./validation');
const router = new Router();

router.post('/user/create', validation.cuv , async ctx => {
  const data = ctx.request.body;
  if (ctx.state.pass) {
   try {
      const user = new db.User({
      id: new mongoose.Types.ObjectId,
      name: data.name,
      last: data.last,
      avatar: data.avatar
    });
    const promise =  await user.save();

    ctx.status = 200;
    ctx.body = consts.created;
   } catch(e) {
     ctx.status = 400;
     ctx.body = {
       message: consts.cantCreate,
     }
   }
  } else {
    ctx.status = 301;
    ctx.body = consts.cantCreate;
  }
})

module.exports = router.routes();