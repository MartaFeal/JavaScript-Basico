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

//pruebo que funcione:
// let Figura1 = new Figura('rojo');
// console.log(Figura1);

// Figura1.setColor('verde');
// console.log(Figura1);