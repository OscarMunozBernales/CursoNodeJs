let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`;
    },

}

console.log(deadpool.getNombre());

//DESTRUCTURACION

//Este seria el metodo tradicional

/*
let nombre = deadpool.nombre;
let apellido = deadpool.apellido;
let poder = deadpool.poder;
*/

//Este seria con la destructuracion

let { nombre, apellido, poder } = deadpool;
//Los argumentos de la destructuracion (nombre, apellido, poder) tiene que ser igual a los atributos del objeto 'deadpool'

console.log(nombre, apellido, poder);