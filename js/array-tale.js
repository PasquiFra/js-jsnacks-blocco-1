console.log("JS OK");

const maxElements = parseInt(prompt("Quanti numeri vuoi che generi?", 15));

const array = [];
let number;

for (let i=0 ; i < maxElements ; i++) {
    number = Math.floor(Math.random() * (100-1)+1);
    array.push(number)
}

console.table(array);

for (let i= maxElements - 5 ; i < maxElements ; i++ ){
    console.log("Gli ultimi 5 elementi da stampare sono: ",array[i])
}

// BONUS

const toPrint = parseInt (prompt("Quanti elementi vuoi stampare?", 4));

if (toPrint > maxElements) {
    alert ("Devi scegliere un numero inferiore o uguale agli elementi totali");
}    

for (let i = maxElements - toPrint ; i < maxElements ; i++) {

    console.log("Gli ultimi 4 elementi da stampare sono: ", array[i]);

}