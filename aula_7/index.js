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
const uuid = require("uuid/v1");
var connection=require("./config/database");

app.get('/', function(req, res){
    connection.query("SELECT produto.id,produto.name,produto.price,COUNT(stock.chave) AS stock, imagem.url AS image FROM produto left join stock on produto.id=stock.idProduto LEFT JOIN imagem on produto.id=imagem.idProduto where stock.active=0 GROUP BY produto.name,produto.price", function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.get('/genero', function(req, res){
    connection.query("SELECT * FROM genero", function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.post('/add',function(req,res){
    var data=req.body;
    connection.query("select * from produto where name=?",[data.produto],function(err,rows){
        if(rows.length==0){
            var sql="insert into produto (name,price,nsell) values (?,?,0);";
            connection.query(sql,[data.produto,data.valor],function(err,rows){})
            connection.query("select * from produto where name=?",[data.produto],function(err,rows){
                var id=rows[0].id;
                connection.query("insert into imagem (idProduto,name,url) values (?,?,?)",[id,data.produto,data.imgURL],function(err,rows){})
            })
            if(err) throw err;
                res.send("record added");
        }else{
            res.send("produto ja existe");
        }
    });
});

app.post('/addkeys',function(req,res){
    var data=req.body;
    connection.query("select * from produto where name='"+data.produto+"'",function(err,rows){
        if(rows.length!=0){
            id=rows[0].id;
            for(let i=0;i<data.chave;i++){
                var randChave=uuid();
                connection.query("insert into stock (idProduto,chave,active) values (?,?,?)",[id,randChave,0],function(err,rows){
                });
            }
            if(err) throw err;
                res.send("record added");
        }else{
            res.send("produto nao existe");
        }
    });
});

app.post('/delProduto',function(req,res){
    var data=req.body;
    connection.query("select * from produto where name='"+data.produto+"'",function(err,rows){
        if(rows.length!=0){
            var id=rows[0].id;
            connection.query("SET FOREIGN_KEY_CHECKS = 0",function(err,rows){});
            connection.query("delete from produto where id="+id,function(err,rows){});
            connection.query("delete from stock where idProduto="+id,function(err,rows){});
            connection.query("delete from imagem where idProduto="+id,function(err,rows){});
            connection.query("SET FOREIGN_KEY_CHECKS = 1",function(err,rows){});
            console.log("del");
                if(err) throw err;
                res.send("record deleted");
        }else{
            console.log("404");
            res.send("produto nao existe");
        }
    });
});



app.post('/search', function(req, res){
    var data=req.body;
    sql="SELECT produto.id,produto.name,produto.price,COUNT(stock.chave) AS stock, imagem.url AS image FROM produto left join stock on produto.id=stock.idProduto LEFT JOIN imagem on produto.id=imagem.idProduto where stock.active=0 AND produto.name LIKE '%?%' GROUP BY produto.name,produto.price";
    connection.query(sql,[data.nome],function(err,rows){
        if(err) throw err;
            res.send(rows);
    });
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));
