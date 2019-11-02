var express = require('express');
var path = require('path');

var fs = require('fs');
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

// Here we handle the post request of the user in the login page
app.post('/', function(req, res) {
  let data = fs.readFileSync('users.json');
  let StringData = data.toString();
  if(StringData == ''){
       // A message should be displayed indicating that the username is wrong
  }
  else{
    let user = req.body; 
    let parsedData = JSON.parse(StringData);
    for(var i = 0;i<parsedData.length;i++){
      if(parsedData[i].username  == user.username)
      {
        if(parsedData[i].password == user.password){
          res.render('home');
          break;
        }else{
          // A message should be displayed indicating that the password is wrong
        }
      }else{
          // A message should be displayed indicating that the username is wrong
      }
    }
  }
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


app.get('/registration', function(req, res) {
  res.render('registration',{ output : '' });
});

//Here we handle the post request of the user in the registration page 
app.post('/register', function(req, res) {
    let data = fs.readFileSync('users.json');    
    let StringData = data.toString();
    if(StringData == '')
      StringData = '[]';
    let parsedData = JSON.parse(StringData);
    var Obj = req.body;
    var f = false;
    for(var i = 0;i<parsedData.length;i++){
      if(parsedData[i].username  == Obj.username){
        f = true ;
        break;
      }
    }
    if(f){
      // A message should indicate that this user name already exists
      res.render('registration',{ output : 'Username already exists' });

    }else{
      parsedData.push(Obj);
      var j = JSON.stringify(parsedData);
      fs.writeFileSync("users.json",j);
      res.render('registration',{ output : 'Registration done successfully' });
      
    }

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




app.listen(3000);

module.exports = app;
