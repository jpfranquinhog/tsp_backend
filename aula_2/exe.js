function massa(peso,altura){
    return peso/(altura*2);
}

function inverso(fraze){
    var n=fraze.length,tmp="",i;
    for(i=n;i>0;i--){
        tmp+=fraze[i-1]
    }
    return tmp;
}

function vogais(str){
    var n=0,len=str.length,i;
    for(i=0;i<len;i++){
        if((str[i]=="a")||(str[i]=="u")||(str[i]=="o")||(str[i]=="i")||(str[i]=="e")){
            n++;
        }
    }
    return n;
}

function repete(str,l){
    var n=0,len=str.length,i;
    str=str.toLowerCase();
    l=l.toLowerCase();
    for(i=0;i<len;i++){
        if(str[i]==l){
            n++;
        }
    }
    return n;
}

function horas(h1,h2){
    var h=[0,0,0];
    var d = new Date(0,0,0,)
    if(h1[0]>h2[0]){
        return "saio antes de entrar?";
    }
    else if(h1[0]<8){
        return "fechado antes das 8"
    }else if((h2[0]==18)&&((h2[1]>0)||(h2[2]>0))){
        return "fechado depois das 18 1"
    }else if(h2[0]>18){
        return "fechado depois das 18 2"
    }else{
        h[0]=h2[0]-h1[0];
        h[1]=h2[1]-h1[1];
        h[2]=h2[2]-h1[2];
    }

    return h;
}

function retangulo(x,y){
    var a,i,h;
    for(i=0;i<y;i++){
        a=""
        for(h=0;h<x;h++){
            a+="*"
        }
        console.log(a)
    }
}

function triangulo(x){
    var a,i,h;
    for(i=0;i<x;i++){
        a=""
        for(h=0;h<i;h++){
            a+="*"
        }
        console.log(a)
    }
}

function caixa(x){
    var a="",i,h;
    for(i=0;i<x;i++){
        a+="*"
    } 
    console.log(a)
    //meio
    for(i=0;i<x-2;i++){
        a="*"
        for(h=0;h<x-2;h++){
            a+=" "
        }
        a+="*"
        console.log(a)
    }
    a=""
    for(i=0;i<x;i++){
        a+="*"
    }
    console.log(a)
}

function alunos(x){
    var aluno1 = {nome:"joao", nota1:15, nota2:10, nota3:12};
    var aluno2 = {nome:"maria", nota1:12, nota2:10, nota3:17};
    var aluno3 = {nome:"antonio", nota1:10, nota2:10, nota3:10};
    var aluno4 = {nome:"franco", nota1:12, nota2:9, nota3:16};
    var alunos=[aluno1,aluno2,aluno3,aluno4];
    console.log("listar:");
    listarAlunos(alunos);
    console.log("melhor:");
    melhorNota(alunos);
    console.log("pior:");
    piorNota(alunos);
    console.log("media:");
    media(alunos);
}

function listarAlunos(alunos){
    var i;
    for(i=0;i<alunos.length;i++){
        console.log(alunos[i]);
    }
}

function melhorNota(alunos){
    var i,nota=0,n=0;
    for(i=0;i<alunos.length;i++){
        if(alunos[i].nota1>nota){
            nota=alunos[i].nota1;
            n=alunos[i].nome;
        }
        if(alunos[i].nota2>nota){
            nota=alunos[i].nota2;
            n=alunos[i].nome;
        }
        if(alunos[i].nota3>nota){
            nota=alunos[i].nota3;
            n=alunos[i].nome;
        }
    }
    console.log(n,nota);
}

function piorNota(alunos){
    var i,nota=20,nome="";
    for(i=0;i<alunos.length;i++){
        if(alunos[i].nota1<nota){
            nota=alunos[i].nota1;
            nome=alunos[i].nome;
        }
        if(alunos[i].nota2<nota){
            nota=alunos[i].nota2;
            nome=alunos[i].nome;
        }
        if(alunos[i].nota3<nota){
            nota=alunos[i].nota3;
            nome=alunos[i].nome;
        }
    }
    console.log(nome,nota);
}

function media(alunos){
    var i,dif=20,nome="",nota=0,med,media=0;
    for(i=0;i<alunos.length;i++){
        media=(alunos[i].nota1+alunos[i].nota2+alunos[i].nota3)/3
        if((media-alunos[i].nota1)%2==0){
            if(dif>media-alunos[i].nota1){
                nome=alunos[i].nome;
                dif=media-alunos[i].nota1;
                med=media;
                nota=alunos[i].nota1
            }else{
                nome=alunos[i].nome;
                dif=(media-alunos[i].nota1)/-1;
                med=media;
                nota=alunos[i].nota1
            }
            if((media-alunos[i].nota2)%2==0){
                if(dif>media-alunos[i].nota2){
                    nome=alunos[i].nome;
                    dif=media-alunos[i].nota2;
                    med=media;
                    nota=alunos[i].nota2
                }else{
                    nome=alunos[i].nome;
                    dif=(media-alunos[i].nota2)/-1;
                    med=media;
                    nota=alunos[i].nota2
                }
            }
            if((media-alunos[i].nota3)%2==0){
                if(dif>media-alunos[i].nota3){
                    nome=alunos[i].nome;
                    dif=media-alunos[i].nota3;
                    med=media;
                    nota=alunos[i].nota3
                }else{
                    nome=alunos[i].nome;
                    dif=(media-alunos[i].nota3)/-1;
                    med=media;
                    nota=alunos[i].nota3
                }
            }
        }
    }
    console.log(nome," nota: ",nota," media: ",med);
}

function main(){
    //console.log(massa(90,1.80));
    //console.log(inverso("hi teste"));
    //console.log(vogais("hi teste"))
    //console.log(repete("hi tEste","E"))
    //console.log(horas([9,0,0],[16,30,45]))
    //console.log(retangulo(10,5))
    //console.log(triangulo(10))
    //console.log(caixa(10))
    alunos()
}

main()