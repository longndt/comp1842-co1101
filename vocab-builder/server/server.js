//1. declare & import "express" library (Express: NodeJS framework)
const express = require('express')
//1A (optional). declare and import "fs" library (fs: file system)
const fs = require('fs')
//2. declare server port
//port number is flexible, it only need to be different with others
//"process.env.PORT" is unnecessary to include for local web. It is
//only compulsory if we deploy web app to cloud
//const port = process.env.PORT || 1234
const port = 1234
//3. declare "app" (web app) as instance of "express"
const app = express()
//4. run the web app : listen to port
app.listen(port)
//console.log(`Server is running at port ${port}`)
console.log(`Web url: http://localhost:${port}`)
console.log('Web url: http://localhost:' + port)
//5. display web pages
app.get("/", (req, res) => {
   fs.readFile("views/index.html", (err, data) => {
      if (!(err)) {
         res.write(data)
         res.end()
      } else {
         console.error(err)
         res.end()
      }
   })
})
app.get("/login", (req, res) => {
   //"res.send" only return the first line
   res.send("This is login page")
   //res.send("This line is not displayed")
})

//Run web app in terminal : npm start