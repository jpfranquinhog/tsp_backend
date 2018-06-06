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
var allClients = [];
io.on('connection', function (socket) {
    console.log("New User Connected");    
    //default username
    socket.username = "Anonymous";
    socket.id = uuid();
    allClients.push(socket);
    io.sockets.emit('new_user', { message: socket.username+" entro na sala"});

    io.sockets.emit('user_listdel', { message: socket.username});
    allClients.forEach(function(client) {
        io.sockets.emit('user_list', { message: client.username});
    });

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', { message: data.message, username: socket.username });
    })   
    socket.on('new_username', (data) => {
        //broadcast the new message
        io.sockets.emit('name_change', { message: socket.username+" mudou de nome para: ", username: data.username });
        var i = allClients.indexOf(socket);
        allClients[i].username=data.username;
        socket.username=data.username;
        
    })
    socket.on('disconnect', function() {
        console.log('User left');
        io.sockets.emit('user_left', { message: socket.username+" saio da sala"});
        var i = allClients.indexOf(socket);
        allClients.splice(i, 1);
    });
    
});