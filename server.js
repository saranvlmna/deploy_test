var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hey server!!"); 
  })
  .listen(3000, () => {
    console.log(`[server] is running at http://localhost:${3000}`);
  });
