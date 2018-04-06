function main(){
    var array=[];
    array.push(function(){
        console.log("world 1");
    });
    array.push(function(){
        console.log("world 2");
    });
    array.push(function(){
        console.log("world 3");
    });
    //for(i=0;i<array.length;i++){
    //    array[i];
    //}
    array.forEach(element => {
        element();
    });
}

main();