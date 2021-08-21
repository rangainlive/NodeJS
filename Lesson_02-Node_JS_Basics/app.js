const http = require("http");
const routes = require("./routes");

// One way of Creating Server & function
/* function reqListender(req, res) {}

 http.createServer(reqListender);*/

// Another way to Create server using Anonymous Function
/*http.createServer(function (req, res) {});*/

// Another way to Create server using Arrow Function
const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(5000);

