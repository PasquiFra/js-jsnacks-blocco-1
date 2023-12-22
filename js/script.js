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
    console.log(array[i])
}