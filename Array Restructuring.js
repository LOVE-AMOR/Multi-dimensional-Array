let namesInput = prompt("Enter names separated by commas: (e.g. Genevieve, Juan, Luna, Gabriel, Elise)");
let agesInput = prompt("Enter ages separated by commas: (e.g. 24, 65, 21, 5, 9)");

let names = namesInput.split(',').map(name => name.trim()); 
let ages = agesInput.split(',').map(age => parseInt(age.trim())); 

let mergedArray = [];

for (let i = 0; i < names.length; i++) {
    mergedArray.push([names[i], ages[i]]);
}

mergedArray.forEach(pair => {
    console.log(`Name: ${pair[0]}, Age: ${pair[1]}`);
});