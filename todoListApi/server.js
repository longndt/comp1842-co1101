//(1) import & declare "express" framework
var express = require('express')
var app = express()

//(2) import & config "mongoose" to connect to DB
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/api"     //api: database name
mongoose.connect(db)
   .then(() => console.log('connect to db success'))
.catch((err) => console.error('connect to db failed. ' + err))

//(2) import & config "body-parser" to get input data
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//(3) define & register router
const router = require('./api/routes/todoListRoutes')
router(app)

//(4) start server by listening to port
var port = 3000                                 //default port of NodeJS/ExpressJS
app.listen(port)