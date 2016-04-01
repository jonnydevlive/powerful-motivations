var express = require('express');
var app = express();

app.use('/angular2', express.static(__dirname + '/angular2-app'));
app.use('/react-redux', express.static(__dirname + '/react-redux-app'));

app.use('/images', express.static(__dirname + '/images'))
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/angular2', function(req, res){
  res.sendFile('angular2-app/index.html', {root: __dirname})
});

app.get('/react-redux', function(req, res){
  res.sendFile('react-redux-app/index.html', {root: __dirname})
});

app.get('/', function (req, res) {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/index.css', function(req, res){
  res.sendFile('index.css', {root: __dirname});
});

app.listen(3000, function () {
  console.log('Powerful Motivations listening on port 3000!');
});