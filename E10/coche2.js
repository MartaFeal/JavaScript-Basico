
class Coche {
 
    constructor(peso, potencia, marca) {
    this.peso = peso + " " + "kg/cv";
    this.potencia = potencia + " " + "cv/l";
    this.marca = marca;    
    };
  
        getPeso(){
         return this.peso;
        }
 
        setPeso(peso){
            this.peso = peso;
            return this.peso + " " + "kg/cv" ;
         }

        getPotencia(){
         return this.potencia;
        }

        setPotencia(potencia){
            this.potencia = potencia;
            return this.potencia + " " + "cv/l";
        }

        getMarca(){
            return this.marca
         }
        
        setMarca(marca) {
            this.marca = marca;
            return this.marca;
        }

}

let Coche1 = new Coche(11.7, 12.0, "Opel Corsa");
console.log(Coche1);

Coche1.setPeso(13.8 + "kg/cv");
//nuevo peso
console.log(Coche1);
