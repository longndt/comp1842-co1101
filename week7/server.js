const http = require('http')
http.createServer((req, res) => {
   if (req.url == '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.write(JSON.stringify({university : "Greenwich Vietnam"}))
      res.end()
   } else if (req.url == '/hanoi') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('Greenwich Ha Noi')
      res.end()
   } else if (req.url == '/danang') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('Greenwich Da Nang')
      res.end()
   } else {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('404 Error : Page Not Found !')
      res.end()
   }

}).listen(5678, () => {
   console.log('http://localhost:5678')
})