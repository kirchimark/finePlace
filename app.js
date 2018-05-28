const Koa = require('koa');
const koaBody = require('koa-body')();
const compose = require('koa-compose');
const db = require('./db/db');
const app = new Koa();
const userRoutes = require('./user/routes');

app.use(compose([koaBody, userRoutes]));

module.exports = app;