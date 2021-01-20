let massLucas = 78;
let heightLucas = 1.69;
let lucasBMI = massLucas / heightLucas ** 2;

let massJohn = 92;
let heightJohn = 1.95;
let johnBMI = massJohn / heightJohn ** 2;

let lucasHigherBMI = (lucasBMI > johnBMI);

if (lucasHigherBMI === true) {
    console.log("Lucas has a higher BMI than John.")
} else {
    console.log("Lucas does not have a higher BMI than John.")
}

massLucas = 95;
heightLucas = 1.88;

massJohn = 85;
heightJohn = 1.76;

console.log("Lucas and John are friends, Lucas is " + heightLucas + " m tall and John is " + heightJohn + " m tall.");
console.log("So john has a higher BMI than Lucas, that is " + johnBMI + ".");