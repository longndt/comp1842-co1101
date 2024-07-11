var express = require('express')
var app = express()

var port = process.env.PORT || 3333

app.listen(port)
console.log('Server is running at http://localhost:' + port)