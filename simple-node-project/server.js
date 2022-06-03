const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch (page) {
    case "/":
      fs.readFile("index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
    case "/flip":
      res.writeHead(200, { "Content-Type": "application/json" });
      let json;
      let flip = Math.floor(Math.random() * 2);
      if (flip === 0) {
        json = { flip: "heads" };
      } else {
        json = { flip: "tails" };
      }
      res.end(JSON.stringify(json));
      break;
    case "/css/style.css":
      fs.readFile("css/style.css", function (err, data) {
        res.write(data);
        res.end();
      });
      break;
    case "/js/main.js":
      fs.readFile("js/main.js", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/javascript" });
        res.write(data);
        res.end();
      });
      break;
    default:
      figlet("404!!", function (err, data) {
        if (err) {
          console.log("Something went wrong...");
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
      break;
  }
});

server.listen(8000);
