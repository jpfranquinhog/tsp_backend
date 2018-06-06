$(function () {
    //make connection
    var socket = io.connect('http://localhost:3001')

    //buttons and inputs
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    var feedback = $("#feedback")
    var online = $("#online")
    var list = $("#list")

    //Emit message
    send_message.click(function () {
        socket.emit('new_message', { message: message.val() })
    })

    send_username.click(function () {
        socket.emit('new_username', { username: username.val() })
    })

    //Listen on new_message
    socket.on("new_message", (data) => {
        feedback.html('');
        message.val('');
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    }) 
    socket.on("name_change", (data) => {
        feedback.html('');
        message.val('');
        chatroom.append("<p class='message' style='color:blue;' >"+ data.message + data.username + "</p>")
    }) 
    socket.on("new_user", (data) => {
        feedback.html('');
        message.val('');
        chatroom.append("<p class='message' style='color:green;' >"+ data.message +"</p>")
    }) 
    socket.on("user_left", (data) => {
        feedback.html('');
        message.val('');
        chatroom.append("<p class='message' style='color:red;' >"+ data.message +"</p>")
    })
    socket.on("user_list", (data) => {
        list.html('');
        message.val('');
        online.append("<p class='message' style='color:yellow;' >"+ data.message +"</p>")
    })
    socket.on("user_listdel", (data) => {
        list.html('');
        message.val('');
        online.empty();
    })
    socket.on("new_username", (data) => {
        username.val(data.username);
    }) 
});