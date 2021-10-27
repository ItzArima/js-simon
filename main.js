var esponi = [];
for (let i=0;i<5;i++){
    var numero = Math.floor(Math.random()*10 +1);
    if(esponi.includes(numero) == false){
        esponi.push(numero);
    }
    else{
        i--;
    }
}
console.log(esponi);

alert(esponi);
var inserisci = [];
var giusti = [];

setTimeout(function()
{
    for(let i=0;i<esponi.length;i++){
        var inserito = parseInt(prompt("inserisci un numero"))
        if(inserisci.includes(inserito) == false){
            inserisci.push(inserito);
            console.log("numero inserito");
            if(esponi.includes(inserito)==true){
                giusti.push(inserito);
            }
        }
        else{
            i--;
            alert("numero gia inserito");
        }
    }
    console.log(inserisci);
    
    alert("numeri indovinati : "+giusti.length+"("+giusti+")");
    
},
30000); 

/* var random =[];

function genera(){
    return Math.floor(Math.random()*10 +1);
}

while (random.length<5){
    var numero = genera();
    if(random.includes(numero) == false){
        random.push(numero);
    }
}
alert(random);

var numeriInseriti = [];
var azzeccati = [];

setTimeout(function(){
    while(numeriInseriti.length<random.length){
        var numero = parseInt(prompt("inserisci un numero"));
        if(!numeriInseriti.includes(numero)){
            numeriInseriti.push(numero);
            if(random.includes(numero)==true){
                azzeccati.push(numero)
            }
        }
        else{
            console.log("hai gia inserito questo numero");
        }
        console.log(numeriInseriti + " numeri inseriti");
        console.log(azzeccati+ " numeri azzeccati");
    }
},3000) */