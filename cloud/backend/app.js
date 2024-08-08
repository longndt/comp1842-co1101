//express : framework
const express = require('express')
const app = express()

//cors : share API
const cors = require('cors')
app.use(cors())

//mongoose : database
const mongoose = require('mongoose')
//NOTE 1: Replace local db url with cloud db url, keep db name unchanged
//You need to create a similar db name, table name with local db in cloud db
//You should export sample data from local and export to cloud
const db = "mongodb+srv://longndt:SwZZ3QRJ5YFMLYlc@cluster0.ziyavjz.mongodb.net/vocab-builder"   // vocab-builder: db name
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
//NOTE 2: Config port for cloud deployment
const port = process.env.PORT || 3001
app.listen(port)
