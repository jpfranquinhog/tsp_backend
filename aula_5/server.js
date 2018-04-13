const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var fs = require("fs");
function readfile(name){
    var file = fs.readFileSync(name,"utf-8");
    return file;
}

var fileData = readfile("./persons.json");

app.get('/', (req, res) => res.send(fileData));

app.post("/add", function(request,response){
    var file = JSON.parse(fileData);
    var id=Object.keys(file).length+1;
    request.body.id = id;
    file["person"+id]=request.body;
    response.send(JSON.stringify(file));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));