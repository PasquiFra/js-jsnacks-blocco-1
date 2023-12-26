console.log("JS OK")

let array1 = [];
let array2 = []; 
let value1;
let value2;

//chiedo quanti elementi inserire nelle array
const items1 = parseInt(prompt("Quanti elementi vuoi nella prima lista?", 10).trim());
const items2 = parseInt(prompt("Quanti elementi vuoi nella seconda lista?", 5).trim());

if (items1 > 9999 || items2 > 9999 || isNaN(items1, items2)) {
    alert("Scegli un numero tra 1 e 9999!");
} else {   
    //creo dei numeri casuali da inserire nelle array 
    for (let i=0 ; i < items1 ; i++) {
        value1 = Math.floor(Math.random() *100 - 1) + 1;
        array1.push(value1); 
    }
    for (let i=0 ; i < items2 ; i++) {
        value2 = Math.floor(Math.random() *100 - 1) + 1;
        array2.push(value2); 
    }
}

    console.table ("Array 1 ", array1, "Array 2 ", array2);
    
    //All'array con meno elementi ne aggiungo quanti ne bastano per pareggiare gli elementi dell'altra
    
    for (let i = 0 ; i < items1 && i < items2 ; i++) {
        if (array1.length < array2.length) {
            const addvalue1 =  Math.floor(Math.random() *100 - 1) + 1;
            array1.push(addvalue1);
            console.log("La prima array è ora di questa lunghezza: ", array1.length);
        } else if(array2.length < array1.length) {
            const addvalue2 =  Math.floor(Math.random() *100 - 1) + 1;
            array2.push(addvalue2);
            console.log("La seconda array è ora di questa lunghezza: ", array2.length);
        } else if (array2.length = array1.length){
            console.log("Ottimo... le due array sembrano essere della stessa lunghezza!", array1.length, array2.length);
        }
    }
    
    console.table ("Array 1 ", array1, "Array 2 ", array2);

// ora.... vediamo chi ha la media maggiore!
let total1 = 0;
let total2 = 0;
const elementTot = array1.length;

for (let i = 0 ; i<array2.length ; i++){
    total1 += array1[i];
    total2 += array2[i];
}

console.log(total1, total2);

let media1 = (total1 / elementTot);
let media2 = (total2 / elementTot);

console.log(media1, media2);


