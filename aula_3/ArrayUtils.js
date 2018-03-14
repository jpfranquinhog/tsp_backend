var log = {
    isEmpty: function(x){
        if(x.length==0){
            return true;
        }else{
            return false;
        }
    },
    max: function(x){
        var i,n=x[0];
        for(i=1;i<x.length;i++){
            if(x[i]>n){
                n=x[i];
            }
        }
        return n;
    },
    min: function(x){
        var i,n=x[0];
        for(i=1;i<x.length;i++){
            if(x[i]<n){
                n=x[i];
            }
        }
        return n;
    },
    average: function(x){
        var i,media=0;
        for(i=0;i<x.length;i++){
            media+=x[i];
        }
        media/=x.length;
        return media;
    },
    indexOf: function(x,y){
        var i;
        for(i=0;i<x.length;i++){
            if(x[i]==y){
                return i;
            }
        }
    },
    subArray: function(x,start,end){
        var i,sub=[];
        for(i=start;i<=end;i++){
            sub.push(x[i]);
        }
        return sub;
    },
    isSameLength: function(x,y){
        if(x.length==y.length){
            return true
        }else{
            return false
        }
    },
    reverse: function(x){
        var i,temp=[];
        for(i=x.length-1;i>=0;i--){
            temp.push(x[i]);
        }
        return temp;
    },
    swap: function(x,first,second){
        var temp=x[second];
        x[second]=x[first];
        x[first]=temp;
        return x;
    },
    contains: function(x,n){
        if(this.indexOf(x,n)!=null){
            return true;
        }else{
            return false;
        }
    },
    concatenate: function(x,y){
        var i;
        for(i=0;i<y.length;i++){
            x.push(y[i]);
        }
        return x;
    }

}
module.exports=log;
