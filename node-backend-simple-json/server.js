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
    case "/otherpage":
      fs.readFile("otherpage.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
    case "/otherotherpage":
      fs.readFile("otherotherpage.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      break;
    case "/api":
      studentReturn(params, res);
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

function studentReturn(params, res) {
  if ("student" in params) {
    let objToJson;
    switch (params["student"]) {
      case "leon":
        res.writeHead(200, { "Content-Type": "application/json" });
        objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
        };
        res.end(JSON.stringify(objToJson));
        break;
      case "andrew":
        res.writeHead(200, { "Content-Type": "application/json" });
        objToJson = {
          name: "andrew",
          status: "Champion",
          currentOccupation: "The Best That Ever Did It",
        };
        res.end(JSON.stringify(objToJson));
        break;
      default:
        res.writeHead(200, { "Content-Type": "application/json" });
        objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
        };
        res.end(JSON.stringify(objToJson));
        break;
    }
  }
}

server.listen(8000);
