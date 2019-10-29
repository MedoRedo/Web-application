var express = require('express');
var path = require('path');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
  res.render('login');
});

app.get('/action', function(req, res) {
  res.render('action');
});

app.get('/conjuring', function(req, res) {
  res.render('conjuring');
});

app.get('/darkknight', function(req, res) {
  res.render('darkknight');
});

app.get('/drama', function(req, res) {
  res.render('drama');
});

app.get('/fightclub', function(req, res) {
  res.render('fightclub');
});

app.get('/godfather', function(req, res) {
  res.render('godfather');
});

app.get('/godfather2', function(req, res) {
  res.render('godfather2');
});

app.get('/home', function(req, res) {
  res.render('home');
});

app.get('/horror', function(req, res) {
  res.render('horror');
});

/*app.get('/login', function(req, res) {
  res.render('login');
});*/

app.get('/registration', function(req, res) {
  res.render('registration');
});

app.get('/scream', function(req, res) {
  res.render('scream');
});

app.get('/searchresults', function(req, res) {
  res.render('searchresults');
});

app.get('/warchlist', function(req, res) {
  res.render('watchlist');
});



/*var fs = require('fs');
var myObj = {
  name : "Eslam",
  age : 19
}
//console.log(myObj);
var j = JSON.stringify(myObj);
//console.log(j);
fs.writeFileSync("aaa.json",j);
var r = fs.readFileSync("aaa.json");
// console.log(r);
var obj = JSON.parse(r);
console.log(obj);*/

app.listen(3000);

module.exports = app;
