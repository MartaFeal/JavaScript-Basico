export function horaLocal() {
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();    let segundos = momentoActual.getSeconds();
    
    return hora + ':' + minuto + ':' + segundos;


}

