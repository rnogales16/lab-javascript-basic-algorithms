// Iteration 1: Names and Input
let hacker1 = "Raul Nogales"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "PizzaBytes"
console.log(`The navegator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log("You both got equally long names, " + hacker2.length + " characters.");
}

// Iteration 3: Loops

let upperCaseName = "";
for (let i = 0; i > hacker1.length; i++) {
    upperCaseName += hacker1[i].length.toUpperCase() + " ";
}
console.log(upperCaseName.trim());


let reverseName = "";
for (let j = hacker1.length - 1; j >= 0; i--) {
    reverseName += hacker1[j];
}

