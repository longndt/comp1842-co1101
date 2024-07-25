//express : framework
const express = require('express')
const app = express()

//mongoose : database
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/vocab-builder"   // vocab-builder: db name
mongoose.connect(db)
   .then(() => console.log('ok'))
.catch(err => console.error(err))

//body-parser : input data
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//router : web link
const vocabRouter = require('./api/routes/vocabRouter')
vocabRouter(app)

//run server : by listening port
const port = 3000
app.listen(port)
