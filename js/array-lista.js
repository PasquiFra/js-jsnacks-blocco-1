console.log("JS OK")

const frigorifero = [ "banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "fragola"];
let listaDellaSpesa = [];
const cocomero = "cocomero";

frigorifero.push("pesca");

console.table(frigorifero);

console.table(listaDellaSpesa);

for (let i=0 ; i < frigorifero.length ; i++){
    if (cocomero !== frigorifero[i] && listaDellaSpesa.length === 0){
        listaDellaSpesa.push(cocomero);
    }
}
for (let i=0 ; i < frigorifero.length ; i++){
    if (cocomero === frigorifero[i]) {
    console.log("Trovato! Devo solo preparare il cocktail...");
    listaDellaSpesa = []
    }
} 

if (listaDellaSpesa.length !== 0 ) {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}

console.log("cosa ho in lista quindi?", listaDellaSpesa)

