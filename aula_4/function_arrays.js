function main(){
    var array=[];
    var i;
    var x= function(){
        console.log("world 1");
    }
    var y= function(){
        console.log("world 2");
    }
    var z= function(){
        console.log("world 3");
    }
    array.push(x());
    array.push(y());
    array.push(z());
    //for(i=0;i<array.length;i++){
    //    array[i];
    //}
    array.forEach(element => {
        element;
    });
}

main();