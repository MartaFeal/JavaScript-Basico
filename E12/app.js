let array = ['Manzanas', 'Cebollas', 'Aguacates', 'Coliflor'];

function eliminarUltimo() {
    let ultimo = array.pop();
    return array;
}

console.log(array);
console.log(eliminarUltimo(array));
