function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}  

for (let j=1; j<=10; j++) {
    if (esPrimo(j)){
        console.log("Número primo");
    }
    else{
        console.log(j);
    }
}