/*var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})*/

const express = require('express');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const fs = require('fs'); // modulo file system, que serve para apanhar, criar ficheiros ect
const uuid = require("uuid/v1");
function readFile(path){
    var file = fs.readFileSync(path,'utf-8');
    return file;
}

app.get('/', function(req, res){
    var f = readFile("./videos.json");    
    res.send(f);
});

app.post('/add',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f); // transforma data "string" para um "objecto"
    var size=Object.keys(jsondata).length;
    var id=uuid();
    var p=req.body;
    p.id=id;
    jsondata["video"+id]=p;
    res.send(JSON.stringify(jsondata));
    fs.writeFile("videos.json",JSON.stringify(jsondata), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});

app.delete('/del/:id',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f); // transforma data "string" para um "objecto"
    var size=Object.keys(jsondata).length;
    var id=req.params.id;
   
    var video = jsondata["video" + id];

    for (let i = 0; i < size; i++) {
        vid="video"+i;
        if(video!=undefined){
            delete jsondata["video" + id];
            res.send(JSON.stringify(jsondata));
            fs.writeFile("videos.json",JSON.stringify(jsondata), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
        }
    }
});



app.listen(3000, () => console.log('Example app listening on port 3000!'));


