function performDownload(start,completed,update){
    var i;
    console.log(start());
    for(i=0;i<100;i++){
        console.log(update(i))
    }
    console.log(completed());
}

function main(){
    var log=require("./ArrayUtils");
    var started = function(){
        return "Started Download";
    }
    var update = function(i){
        return i+1+"% of Download";
    }
    var completed = function(){
        return "Download Conpleted";
    }
    //performDownload(started,completed,update);
    //console.log(log.isEmpty([]));
    //console.log(log.max([1,2,10,3]));
    //console.log(log.min([1,2,10,0,3]));
    //console.log(log.average([1,3,3,1]));
    //console.log(log.indexOf([1,7,2,4],7));
    //console.log(log.subArray([1,7,2,4],1,2));
    //console.log(log.isSameLength([1,7,2,4],[1,2,3,4,6]));
    //console.log(log.reverse([1,7,2,4]));
    //console.log(log.swap([1,7,2,4],1,2));
    //console.log(log.contains([1,7,2,4],2));
    console.log(log.concatenate([1,7],[1,2]));
}

main();