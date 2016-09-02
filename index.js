var express = require('express');
var bodyParser = require("body-parser");
var app = express();

var routes = require('./routes/routes');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use('/', routes);


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/login', function(request, response) {
  response.render('pages/login');
});

app.get('/signup', function(request, response) {
  response.render('pages/signup');
});

app.get('/menu', function(request, response) {
  response.render('pages/menu');
});

app.get('/view', function(request, response) {
  response.render('pages/view');
});

app.get('/new', function(request, response) {
  response.render('pages/new');
});

app.get('/vet', function(request, response) {
  response.render('pages/vet');
});

app.get('/topics', function(request, response) {
  response.render('pages/topics');
});

app.get('/convos', function(request, response) {
  response.render('pages/convos');
});

app.get('/talk', function(request, response) {
  response.render('pages/talk');
});

app.get('/me', function(request, response) {
  response.render('pages/me');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});