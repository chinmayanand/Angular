var express = require('express');
var path = require('path');
/*To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
body-parser extract the entire body portion of an incoming request stream and exposes it on  req.body.
*/
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
/*
 body-parser parsed your incoming request, assembled the chunks containing your form data, then created this body object for you and filled it with your form data
app.use(bodyParser.json()) basically tells the system that you want json to be used.
bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
//app.use(express.static(path.join(__dirname, 'dist')));
app.use('/book', book);
module.exports = app;