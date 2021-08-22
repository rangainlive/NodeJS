const fs = require("fs");

const assignmentRouteHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignment 01</title></head>");
    res.write(`<body>
    <h1>Assignment 01 Home page</h1>
    <br/>
      <form action='/create-user' method='POST'>
      <label>Username: <input type='text' name='userName'/></label>
      <button type='submit'>Submit</button>
      </form>
    </body>`);
    res.write("</html");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Assignment 01</title></head>");
    res.write(
      `<body>
      <h1>List of Users</h1>
      <br/>
      <ul>
      <li>User 01</li>
      <li>User 02</li>
      <li>User 03</li>
      </ul>
      </body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const textBody = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      textBody.push(chunk);
    });
    req.on("end", () => {
      const parseTextBody = Buffer.concat(textBody).toString();
      const userName = parseTextBody.split("=")[1];
      console.log("UserName: ", userName);
    });
    res.write("<html>");
    res.write("<head><title>Assignment 01</title></head>");
    res.write("<body><h5>User added Successfully</h5></body>");
    res.write("</html");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.end();
};

module.exports.handler = assignmentRouteHandler;
