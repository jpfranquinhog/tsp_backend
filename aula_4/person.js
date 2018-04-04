function Person(fistName,lastName){
    this.fistName=fistName;
    this.lastName=lastName;
}

function main(){
    var pedro= new Person("pedro","Gouveia");
    var joao= new Person("joao","cardial");
    Person.prototype.age;
    pedro.age=18;
    joao.age=20;
    Person.prototype.greet= function(){
        console.log("hi "+this.fistName+" "+this.lastName+" with "+this.age+" of age");
    }
    pedro.greet();
    joao.greet();
    console.log(joao.__proto__==pedro.__proto__)
}

main();