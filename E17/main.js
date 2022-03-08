import { saludar }  from "./libreria.js";
import { horaLocal } from "./moment.js";

console.log(saludar('María'));
console.log(saludar('Javier'));
console.log('Son las ' + horaLocal());