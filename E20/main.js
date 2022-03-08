class Figura {
 
    constructor(color) {
        this._color = color;
    };
  
    getColor() {
        return this._color;
    }
 
    setColor(color) {
        this._color = color;
        return this._color;
    }

     
    
    calcularArea() {
        
        return -1;
    }


}

class Circulo extends Figura {

    constructor(radio, color) {
        super(color)
        this.radio = radio + 'cm';
        
    }

    
    calcularAreaC() {
        const PI = 3.14;
        let radio = parseFloat(this.radio);
        return 'Area Círculo = ' + PI * Math.pow(radio,2); 
    }
}

class Rectángulo extends Figura{
    constructor(base, altura, color) {
        super(color)
        this.base = base + 'cm';
        this.altura = altura + 'cm';
       
    }

    calcularAreaR() {
        let base = parseFloat(this.base);
        let altura = parseFloat(this.altura)
        return 'Area Rectángulo = ' + base * altura;
    }
}


let Figura1 = new Figura('verde');
console.log(Figura1);
console.log(Figura1.calcularArea());

let FiguraCirulo = new Circulo(90, 'azul');
console.log(FiguraCirulo);
console.log(FiguraCirulo.calcularAreaC());

let FiguraRectángulo = new Rectángulo(20, 40, 'rosa');
console.log(FiguraRectángulo);
console.log(FiguraRectángulo.calcularAreaR());