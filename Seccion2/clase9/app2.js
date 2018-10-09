/**
 * Ciclo de eventos de node ejemplos (app2 y app3)
 */

function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Oscar');
console.log(saludo);