function suma(numero1, numero2) {

    let num1 = numero1;
    let num2 = numero2;

    return num1 + num2;
    
}

function resta(numero1, numero2) {
    
    let num1 = numero1;
    let num2 = numero2;

    return num1 - num2;

}

function multiplicación(numero1, numero2) {

    let num1 = numero1;
    let num2 = numero2;

    return num1 * num2;
}

function división(numero1, numero2) {

    let num1 = numero1;
    let num2 = numero2;

    if (num2 == 0) {
        return "No se puede dividir por 0"
    } else {
        return num1 / num2;
    }

}

console.log("Suma => 10 + 20 = " + suma(10, 20));
console.log("Resta => 23 - 45 = " + resta(23, 45));
console.log("Multiplicación => 45 x 55 = " + multiplicación(45, 55));
console.log("División => 10 / 0 = " + división(5, 0));
console.log("División => 20 / 2 = " + división(20, 2));
