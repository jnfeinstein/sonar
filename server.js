var app     = require('express')(),
    http    = require('http').Server(app),
    io      = require('socket.io')(http),
    path    = require("path"),
    static  = require('express').static;
 
app.use(static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/application.html'));
});

var socketCount = 0;

io.on('connection', function(socket){
  console.log('socket #' + socketCount++);
  socket.on('position', function(position) {
    console.log(position);
  });
});

http.listen(3000);
