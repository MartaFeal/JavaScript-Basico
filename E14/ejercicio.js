

// function sumar() {
    
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
    
//     let sumar = (num1) + (num2);
    
//     document.getElementById('resultado').value = sumar;
   
    
// } 

function sumar(a, b) {
    let resultado = a + b;
    
    if (a || b == '') {
        return 'Introduce número';
    } else {
        return resultado;
    }

    
}


let resultado = (sumar(5, 10));
console.log((resultado));
let resultado2 = sumar('Javier', 'María');
console.log(resultado2);
