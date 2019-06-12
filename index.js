const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const path = require("path");


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + 'views'));
app.use('/public', express.static('public'))


MongoClient.connect(
  db.url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);

    const database = client.db(db.dbName);
    require("./routes/routes.js")(app, database);
    
    app.listen(3333, () => {
      console.log("Connected to " + db.url);
      console.log("We are live on http://localhost:3333");
    });

    module.exports = app;
  }
);