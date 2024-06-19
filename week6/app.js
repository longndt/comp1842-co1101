var http = require('http');
http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("<h1>This is homepage</h1>");
   } else if (req.url === '/welcome') {
      res.write("<h1>This is welcome page</h1>");
   } else if (req.url === '/hello') {
      res.write("<h1>This is hello page</h1>");
   } else {
      res.write("<h1>404 - Page not found</h1>");
   }
   res.end();
}).listen(5000, () =>
   console.log("http://localhost:5000")
);