const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
const ejs = require('ejs');


const app = express();

app.set('view engine', 'ejs');

MongoClient.connect(db.url, {useNewUrlParser: true}, (err, client) => {
    if(err) {
        return console.log(err);
    }
    const database = client.db(db.dbName);
    require('./routes/routes.js')(app, database);
    console.log('Work')
    app.get('/', (req, res) => {
        res.send('ok');
    })
})




app.listen(3333);