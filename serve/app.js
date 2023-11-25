const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router')
const interceptReq = require('./middleware/interceptReq')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(router)
app.use(interceptReq);

app.listen(4000,() => {
    console.log("服务器启动成功");
})
