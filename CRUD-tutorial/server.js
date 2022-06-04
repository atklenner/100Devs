require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(process.env.CONNECTION_STRING)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-wars-quotes");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log(req.body);
  console.log("submit");
});

app.listen(3000, () => console.log("listening on port 3000"));
