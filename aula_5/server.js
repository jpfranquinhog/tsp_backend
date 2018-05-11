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
    var id=req.params.id;
    var video = jsondata["video" + id];
    if(video!=undefined){
        delete jsondata["video" + id];
        res.send(JSON.stringify(jsondata));
        fs.writeFile("videos.json",JSON.stringify(jsondata), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    }else{
        res.send("404");
    }
});

app.get('/showvid/:id',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f); // transforma data "string" para um "objecto"
    var id=req.params.id;
    var video = jsondata["video" + id];
    if(video!=undefined){
        res.send(JSON.stringify(jsondata["video" + id]));
    }else{
        res.send("404");
    }
});

app.get('/showAllVidsUser/:id',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f); // transforma data "string" para um "objecto"
    var user=req.params.id;
    var vid;
    var vids=[];
    var keys = Object.keys(jsondata);
    
    keys.forEach(element => {
        vid=jsondata[element];
        if(vid.Uploader==user){
            vids.push(vid);
        }
    });
    res.send(JSON.stringify(vids));
});

app.post('/addCom/:id',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f);
    var vid=req.params.id;
    var video=jsondata["video"+vid];
    var comment=req.body;
    video.comments.push(comment.com);
    jsondata["video"+vid]=video;
    fs.writeFile("videos.json",JSON.stringify(jsondata), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    res.send(JSON.stringify(jsondata["video"+vid]));
});

app.get('/addview/:id',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f);
    var vid=req.params.id;
    var video=jsondata["video"+vid];
    video.views++;
    jsondata["video"+vid]=video;
    fs.writeFile("videos.json",JSON.stringify(jsondata), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    res.send(JSON.stringify(jsondata["video"+vid]));
});

app.get('/list',function(req,res){
    var f=readFile("./videos.json");
    var jsondata=JSON.parse(f);
    var end=true;
    var keys = Object.keys(jsondata);
    var i=0;
    var order=[];
    var temp=0;
    var reset=false;
    keys.forEach(element => {
        order[i]=jsondata[element];
        i++;
    });
    i=0;
    while(end==true){
        reset=false;
        if(order[i+1]!=undefined){
            if(order[i].views>order[i+1].views){
                temp=order[i];
                order[i]=order[i+1];
                order[i+1]=temp;
                reset=true;
            }
        }else{
            end=false;
        }
        if(reset){
            i=0;
        }else{
            i++;
        }
    }
    res.send(JSON.stringify(order));
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));


