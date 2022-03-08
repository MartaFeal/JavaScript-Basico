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

}

class Circulo extends Figura {

    constructor(radio, color) {
        super(color)
        this.radio = radio + 'cm';
        
    }

}

class Rectángulo extends Figura{
    constructor(base, altura, color) {
        super(color)
        this.base = base + 'cm';
        this.altura = altura + 'cm';
       
    }
}

//compruebo que funcione:
// let FiguraCirulo = new Circulo(90, 'azul');
// console.log(FiguraCirulo);

// let FiguraRectángulo = new Rectángulo(20, 40, 'rosa');
// console.log(FiguraRectángulo);