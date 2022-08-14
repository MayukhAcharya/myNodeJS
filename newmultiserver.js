const server = require("http");
const file = require("fs");
let port = 2000;

const myserver = server.createServer((req, res) => {
  console.log("Request has been made");
  console.log("path : ", req.url);
  console.log("method :", req.method);

  res.setHeader("Content-type", "text/html");
  let path = "./views/tech.html";
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      path = "./views/tech.html";
      break;
    case "/about":
      res.statusCode = 200;
      path = "./views/contact.html";
      break;
    case "/skills":
      res.statusCode = 200;
      path = "./views/skills.html";
      break;
    case "/aim":
      res.statusCode = 200;
      path = "./views/aim.html";
      break;
    case "/favourite":
      res.statusCode = 200;
      path = "./views/fav.html";
      break;
    default:
      res.statusCode = 404;
      path = "./views/404.html";
      break;
  }

  file.readFile(path, (err, readdile) => {
    if (err) {
      console.log("Error");
    } else {
      res.write(readdile);
      res.end();
    }
  });
});

myserver.listen(port, "localhost", () => {
  console.log("Server Started @ port ", +port);
});
