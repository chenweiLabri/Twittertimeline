var express = require('express');
var path = require('path');
var index = require('./routes/index');
var tweets = require('./routes/tweets');
var app = express();

console.log('1');
// serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

console.log('2');
// look for view html in the views directory
app.set('views', path.join(__dirname, 'views'));

console.log('3');
// use ejs to render 
app.set('view engine', 'ejs');

console.log('4');
// setup routes
app.use('/', index);
app.use('/tweets', tweets);


module.exports = app;

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('Listening on ' + port);
});
