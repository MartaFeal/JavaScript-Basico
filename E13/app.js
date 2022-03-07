let array = new Array('Manzana');
let array2 = new Array('Mazana', 'Aguacate', 'Pera');
let array3 = new Array();


function eliminarUltimo(Array) {
    
    if (Array.length >= 1) {
        Array.pop();
        return Array;

    } else {
        return 'ALERTA: array vacio o inválido.'
    }
}

console.log(array3);
console.log(eliminarUltimo(array3));

console.log(array);
console.log(eliminarUltimo(array));

console.log(array2);
console.log(eliminarUltimo(array2))
