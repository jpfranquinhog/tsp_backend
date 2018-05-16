const express = require('express');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const fs = require('fs');
var connection=require("./config/database");
app.get('/', function(req, res){
    connection.query("SELECT * FROM produto", function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.post('/add',function(req,res){
    var data=req.body;
    var sql="insert into produto (name,price,nsell) values (?,?,0);";
    connection.query(sql,[data.produto,data.valor],function(err,rows){
        if(err) throw err;
            res.send("record added");
    });
});

app.delete('/del/:id',function(req,res){
    var id=req.params.id;
    var sql="delete from pesoa where id="+id+";";
    connection.query(sql,function(err,rows){
        if(err) throw err;
            res.send("record deleted");
    });
});

app.get('/showid/:id',function(req,res){
    var id=req.params.id;
    var sql="select * from pesoa where id=?;";
    connection.query(sql,id,function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.get('/showAllVidsUser/:id',function(req,res){
    var id=req.params.id;
    var sql="select * from pesoa where firstname=?;";
    connection.query(sql,id,function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.post('/updateIdade/:id',function(req,res){
    var id=req.params.id;
    var value=req.body;
    var sql="update pesoa set age=? where id=?;";
    values=[value.age,id]
    connection.query(sql,values,function(err,rows){
        if(err) throw err;
            res.send("row updated");
    });
});

app.post('/plus1age/:id',function(req,res){
    var id=req.params.id;
    var sql="update pesoa set age=age+1 where id=?;";
    connection.query(sql,id,function(err,rows){
        if(err) throw err;
            res.send("row updated");
    });
});

app.get('/list',function(req,res){
    var sql="select * from pesoa order by age asc";
    connection.query(sql,function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));
