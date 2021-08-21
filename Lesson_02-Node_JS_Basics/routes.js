const fs = require("fs");

const requestHandler = (req, res) => {
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
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302; //status code 302 - redirection
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello, I'm from Node.js Server..</h1></body>");
  res.write("</html>");
  res.end();
};

// Multiple ways of exporting:
// module.exports = requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "Hai I'm learning Node.js",
};

/*
module.exports.handler = requestHandler;
module.exports.someText = "this is lesson 2 from node.js";*/
/*
exports.handler = requestHandler;
exports.someText = "Lesson 2 - another method of export";*/
