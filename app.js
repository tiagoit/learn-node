var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(5000, function(err) {
  console.log('RUNNING SEVER ON PORT: ', port);
});
