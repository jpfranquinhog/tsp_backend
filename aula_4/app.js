
function main(){
    var x = function(){
        console.log("hi 123");
    }   
    var y = function(){
        console.log("321 ih");
    } 
    var pessoa1 = {
        name:"pedro",
        age:18,
        gender:"male"
    };
    var str = '{"name":"pedro","age":18,"gender":"male" }';
    JSON.stringify(pessoa1);
    JSON.parse(str);

    var Emitter = require("./emitter");
    var Eventos = require("./config");
    var emtr = new Emitter();
    var eventos = new Eventos;
  
    emtr.on(eventos.nomes.TESTE, x);
    emtr.on(eventos.nomes.TESTE, y);
    emtr.on(eventos.nomes.TESTE2, x);
    emtr.emit(eventos.nomes.TESTE2);
}
main();