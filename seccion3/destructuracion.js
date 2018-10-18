let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());

/**
 * Ahora viene la destructuracion
 */

let { nombre: nombreCompleto, apellido, poder } = deadpool;

/**
 * nombre: corresponde a la variable de deadpool que se le inserta los datos a la variable nombreComploto,
 * apellido: es la variable en donde va a ir el dato de deadpool.apellido
 * poder: funcionan de la mimsa forma que apellido
 */
console.log(nombreCompleto, apellido, poder);