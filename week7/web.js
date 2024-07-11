//1. declare & import "http" module (library/package)
const http = require('http')
//2. declare host (web server)
const host = "localhost"
//3. declare server port
const port = 3000   //default port for NodeJS
//4. create web server
// const server = http.createServer(function (request, response) {
// })
const server = http.createServer((request, response) => {
   //use A or B only not both of them
   //A. set the content type for server response
   response.setHeader("Content-Type","text/html")
   //B.write the content type in response's header
   //response.writeHead(200,{"Content-Type" : "text/html"})
   //write (display) content to web page
   response.write("<h1 style='color:red'>Web Programming 2</h1>")
   response.write("<h2 style='background-color:yellow'>Summer 2024 - Greenwich Vietnam</h2>")
   response.write("<h3 style='border: 3px solid blue'>England goes to the final round of Euro 2024</h3>")
   //always stop (end) the response from server at last
   response.end()
})
//5. run web server by listening to port
server.listen(port, () => {
   //console.log('Web server is running at port ' + port)
   //console.log(`Web server is running at port ${port}`)
   console.log('Web server is running at address: http://' + host + ":" + port)
   //Hold CTRL button & click on given URL to automatically open the web page
})

//How to run this code ?
//Terminal (Command Prompt):  node web  | node web.js   (web.js: file name)
//Web browser (ex Chrome)  :  localhost:3000    (3000: port)

//CTRL + C: stop server
//cls: clear terminal screen

//install & use "nodemon" (node monitor - watch) to automatically reload the server if code changes
//install : npm install -g nodemon     (-g: global scope)
//usage   : nodemon web