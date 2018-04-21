const Koa = require('koa')
const app = new Koa()
const colors = require('./fakes/colors.json')

const port = process.env.PORT | 3000

//This API will give list of different colors
app.use(async ctx => {
    ctx.body = colors;
});

app.listen(port, () => {
    console.log('Server is running on PORT ' + port)
});