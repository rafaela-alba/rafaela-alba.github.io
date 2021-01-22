// Part A
let avgNets = (96 + 108 + 89) / 3;
let avgKnicks = (88 + 91 + 110) / 3;

if (avgNets > avgKnicks) {
    console.log("The Nets win!")
}
else if (avgKnicks > avgNets) {
    console.log("The Knicks win!")
}
else {
    console.log('It\'s a tie!')
};

avgNets = (97 + 112 + 101) / 3;
avgKnicks = (109 + 95 + 123) / 3;

if (avgNets > avgKnicks && avgNets > 100) {
    console.log("The Nets win!")
}
else if (avgKnicks > avgNets && avgKnicks > 100) {
    console.log("The Knicks win!")
}
else {
    console.log('It\'s a tie!')
};

avgKnicks = (109 + 95 + 106) / 3;

if (avgNets > avgKnicks && avgNets > 100) {
    console.log("The Nets win!")
}
else if (avgKnicks > avgNets && avgKnicks > 100) {
    console.log("The Knicks win!")
}
else if (avgNets === avgKnicks && avgNets > 100 && avgKnicks > 100) {
    console.log('It\'s a tie!')
}
else {
    console.log("No team wins.")
};

// Part B
let bill = 275;
// bill = 28;
// bill = 430;
let tip;
let range = bill >= 30 && bill <= 300;

switch (range) {
    case true:
        tip = (0.15 * bill)
        break;

    case false:
        tip = (0.2 * bill)
        break;
}
let total = tip + bill;
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value was $${total}`);

// Part C
celsius = 100;
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);

fahrenheit = 212;
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);