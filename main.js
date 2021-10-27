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
    
    console.log("numeri indovinati : "+giusti.length+"("+giusti+")");
    
},
30000);


