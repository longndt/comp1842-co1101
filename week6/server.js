//import & declare http module (package/library)
const http = require('http');

//create web server
const server = http.createServer((request, response) => {
   //server returns response to client
   response.write("<h1 style='color: red;'>Hello world</h1>");
   response.write("<h1 style='color: blue;'>Testing NodeJS web server</h1>");
   response.write("<h1 style='color: green;'>Web Programming 2</h1>");
   //end the respond
   response.end();
})

//set web server port
//3000 : default port in NodeJS web server
const port = 4000;

//run web server by listening port
server.listen(port, () => {
   //display the web server url in console
   //usage: hold CTRL button & click on url to automatically open web browser
   console.log("Server is running at http://localhost:" + port);
})

//Note: install nodemon to automatically monitor code and reload server
//installation: npm install -g nodemon
//usage       : nodemon "file_name"
//just update the code and click F5 on browswer to reload content

