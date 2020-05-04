
var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var router = require('./services/router');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
limit: '50mb',
extended: true,
parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});

app.use('/v1', router);

var PORT = process.env.PORT || 3000;

app.listen(PORT);
