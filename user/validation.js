const dataForUser = [
  'name','last','avatar'
]
const createUser = async (ctx, next) => {
  const data = ctx.request.body;

  console.log('data',data);

  if (dataForUser.map(i=>i in data).every(i=>i)) {
    ctx.state.pass = true;
  } else {
    ctx.state.pass = false;
  }

  return next();
}


module.exports = {
  cuv : createUser,
}