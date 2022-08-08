// celsius to fahrenheit

function temp(celsius){
    let fahrenheit =(celsius * 1.8) + 32;
    return fahrenheit;
}
const frTemp = 32;
const liveTemp = temp(frTemp);
console.log(liveTemp);

// fahrenheit to celsius 

function tempF(fahrenheit){
    let celsius =(fahrenheit - 32) / 1.8;
    return celsius;
}
const crTemp = 84;
const liveTempC = tempF(crTemp);
console.log(liveTempC);