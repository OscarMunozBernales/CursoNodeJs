//Funcion normal
function sumaNormal(a, b) {
    return a + b;
}

//Funcion de fechla
let sumaFlecha = (a, b) => a + b;

console.log(sumaNormal(10, 20));
console.log(sumaFlecha(10, 20));

//funcion hola mundo normal
function saludarNormal() {
    return 'Hola mundo';
}

//funcion hola mundo en flecha

let saludarFlecha = () => 'Hola mundo';

console.log(saludarNormal());
console.log(saludarFlecha());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    },

}