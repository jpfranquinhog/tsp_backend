function notas(a,b,c){
    var x=(a+b+c)/3
    if(x>9){
        console.log("aprovado")
    }
    else{
        console.log("reprovado")
    }
}

function mes(a){
    switch(a){
        case 1:
            console.log("janeiro")
            break;
        case 2:
            console.log("fevereiro")
            break;
    }
}

function factorial(a){
    var fac=0
    for(x=0;x<a+1;x++){
        if(x==0){
            fac=fac+1
        }
        else{
            fac=fac*x
        }
    }
    console.log("factorial",fac)
}

function sequencia(a){
    //min
    var min=99999,size=a.length,max=0,soma=0;
    for(x=0;x<size+1;x++){
        if(a[x]<min){
            min=a[x]
        }
    }
    for(x=0;x<size+1;x++){
        if(a[x]>max){
            max=a[x]
        }
    }
    for(x=0;x<size;x++){
        soma=soma+a[x]
    }
    console.log("minimo: ",min)
    console.log("maximo: ",max)
    console.log("media: ",soma/size)
}

function main(){
    sequencia([13,1,52,4,0])
}

main()
