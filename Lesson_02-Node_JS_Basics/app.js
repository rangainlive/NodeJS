const http = require("http");
const fs = require("fs");
// One way of Creating Server & function
/* function reqListender(req, res) {}

 http.createServer(reqListender);*/

// Another way to Create server using Anonymous Function
/*http.createServer(function (req, res) {});*/

// Another way to Create server using Arrow Function
const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'/><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      // console.log(parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302; //status code 302 - redirection
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello, I'm from Node.js Server..</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(5000);
