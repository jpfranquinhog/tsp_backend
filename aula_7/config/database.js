var mysql=require("mysql");
var configureValues = require("./config");
var connection=mysql.createConnection({
    host:configureValues.host,
    user:configureValues.user,
    password:configureValues.password,
    database:configureValues.database
});

connection.connect(function (err){
    if(err) throw err;
});

module.exports=connection;