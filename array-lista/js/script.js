console.log("JS OK")

const frigorifero = [ "banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "fragola"];

console.log(frigorifero);

frigorifero.push("pesca");

console.log(frigorifero);

const cocomero = "cocomero"

for (let i=0 ; i < frigorifero.length ; i++){
    if (cocomero === frigorifero[i]){
        console.log("Trovato! Devo solo preparare il cocktail...", "il cocomero era proprio qui:", i);
    } else {
        "Oh no, devo uscire a comprare il cocomero!"
    }
    
}
