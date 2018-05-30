var fs = require("fs");
var zlib=require("zlib")
var data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis ipsum eu metus bibendum congue. Proin vestibulum ut mauris euismod suscipit. Mauris bibendum, quam et pretium tempor, felis est aliquet ipsum, non pharetra dolor elit in velit. Pellentesque tincidunt lobortis mauris, ut hendrerit leo posuere nec. Aliquam pellentesque, ipsum ac pulvinar venenatis, leo tortor tristique eros, lobortis varius diam leo sit amet libero. Aenean volutpat, arcu non malesuada eleifend, erat ipsum hendrerit est, venenatis ultrices libero felis sed elit. Sed turpis quam, pharetra lobortis malesuada id, tempus vitae metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec ornare dolor justo, sed aliquet eros luctus vitae. Praesent sodales hendrerit lectus, et finibus libero. Nam id facilisis sem. Vestibulum mattis enim et molestie ullamcorper. Fusce neque libero, egestas non vehicula in, vestibulum sit amet sapien. Sed gravida luctus leo nec consectetur. Nunc dolor libero, tempor at tortor ac, imperdiet aliquet mauris."
var str="";
function write(data) {
    var writerStream=fs.createWriteStream("lorem.txt");
    for(let i=0;i<=1000;i++){
        writerStream.write(data,"UTF8");
    }
    writerStream.end();

    writerStream.on("finish",function(){
        console.log("writing done!");
    })

    writerStream.on("error",function(err){
        console.log(err.stack);
    })
}

function read() {
    var readerStream=fs.createReadStream("lorem.txt");
    readerStream.setEncoding("UTF8");

    readerStream.on("data",function(chunk){
        str+=chunk;
    });
    readerStream.on("end",function(){
        console.log(str);
    });
    readerStream.on("error",function(err){
        console.log(err.stack);
    })
}

function readCopieNew() {
    var readerStream=fs.createReadStream("lorem.txt");
    var writerStream=fs.createWriteStream("teste.txt");
    readerStream.setEncoding("UTF8");

    readerStream.on("data",function(chunk){
        str+=chunk;
        writerStream.write(chunk,"UTF8");
    });
    readerStream.on("end",function(){
        console.log(str);
        writerStream.end();
    });
    writerStream.on("finish",function(){
        console.log("writing done!");
    })
    readerStream.on("error",function(err){
        console.log(err.stack);
    })
}

function readCopieNewPipe() {
    var readerStream=fs.createReadStream("lorem.txt");
    var writerStream=fs.createWriteStream("pipe.txt");

    readerStream.pipe(writerStream);
    readerStream.setEncoding("UTF8");

    readerStream.on("data",function(chunk){
        str+=chunk;
    });
    readerStream.on("end",function(){
        console.log(str);
    });
    readerStream.on("error",function(err){
        console.log(err.stack);
    })
}

function readCopieNewPipeZip() {
    var readerStream=fs.createReadStream("lorem.txt");
    var writerStream=fs.createWriteStream("pipecomp.txt");

    readerStream.pipe(zlib.createGzip()).pipe(writerStream);
    readerStream.setEncoding("UTF8");

    readerStream.on("data",function(chunk){
        str+=chunk;
    });
    readerStream.on("end",function(){
        console.log(str);
    });
    readerStream.on("error",function(err){
        console.log(err.stack);
    })
}

readCopieNewPipeZip();


