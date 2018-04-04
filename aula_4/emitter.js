function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type,listener){
    if(this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);
}
Emitter.prototype.emit = function(type){
    this.events[type].forEach(element => {
        element();
    });
}

module.exports=Emitter;

