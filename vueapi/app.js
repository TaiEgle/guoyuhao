const path = require('path')
// const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/book')
const userRouter = require('./routes/register')
const loginRouter = require('./routes/login')

const app = express();
// const server = http.createServer(app)
app.use(express.json())
app.use(`/book`,bookRouter)
app.use(`/register`,userRouter)
app.use(`/login`,loginRouter)
app.use(cors())

//定义默认路由
app.get('/',(req,res)=>{
    res.send('vue接口ok');
})
app.get('/book',(res,req)=>{
    bookRouter.find({})
    .then((books)=>{
        res.json(books)
    })
})

const Server = app.listen(9999,()=>{
    console.log('服务器运行在 9999');
})