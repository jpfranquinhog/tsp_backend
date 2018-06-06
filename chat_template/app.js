// require and instantiate express
var express = require('express');
var app = express();
const uuid = require("uuid/v1");

app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("New User Connected");    
    //default username
    socket.username = "Anonymous";
    socket.id = uuid();
    io.sockets.emit('new_user', { message: socket.username+" entro na sala"});

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', { message: data.message, username: socket.username });
    })   
    socket.on('new_username', (data) => {
        //broadcast the new message
        io.sockets.emit('name_change', { message: socket.username+" mudou de nome para: ", username: data.username });
        socket.username=data.username;
    })
});