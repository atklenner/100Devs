require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

MongoClient.connect(process.env.CONNECTION_STRING)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("star-wars-quotes");
    const quotesCollection = db.collection("quotes");

    app.get("/", (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((results) => {
          res.render("index", { results });
        })
        .catch((err) => console.error(err));
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((err) => console.error(err));
    });

    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Yoda" },
          { $set: { name: req.body.name, quote: req.body.quote } },
          { upsert: true }
        )
        .then((result) => {
          res.json("Success");
        })
        .catch((err) => console.error(err));
    });

    app.delete("/quotes", (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then((result) => {
          if (result.deletedCount === 0)
            return res.json("No quotes to delete.");
          res.json("Deleted quote.");
        })
        .catch((err) => console.error(err));
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(3000, () => console.log("listening on port 3000"));
