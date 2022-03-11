function sumar (a, b) {
        try {
            if(typeof a === 'number' || typeof b === 'number'){
                return a + b
            } else {
                return next()
            }
        } catch {
            return 'Introduce un número';
        }
}
console.log(sumar(3, 4));
console.log(sumar("hola", "adios"));
console.log(sumar(3, 4));
