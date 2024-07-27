var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//import & config mongoose
var mongoose = require('mongoose')
var db = 'mongodb://localhost:27017/express'
mongoose.connect(db)
   .then(() => console.log('success'))
.catch(err => console.error (err))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

//define & register new router
var apiRouter = require('./routes/api')
app.use('/api' , apiRouter)

module.exports = app;
