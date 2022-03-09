

function sumar(a, b) {
    let resultado = a + b;
    
     if (typeof a === 'string' || typeof b === 'string') {
         return 'Introduce número';
    } else {
         return resultado;
    }

    
}


// let resultado = sumar(5, 10);
// console.log(resultado);
// let resultado2 = sumar('Javier', 'María');
// console.log(resultado2);
