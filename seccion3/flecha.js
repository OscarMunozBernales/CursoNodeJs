//FUNCION NORMAL
function sumarNormal(a, b) {
    return a + b;
}

console.log(`Funcion normal ${sumarNormal(10, 30)}`);
console.log("====");

//FUNCION FLECHA
let sumarFlecha = (a, b) => {
    return a + b;
}

console.log(`Funcion flecha ${sumarFlecha(10, 30)}`);
console.log("====");

//FUNCION FLECHA, SIMPLIFICADA
let sumarFlechaSimple = (a, b) => a + b;

console.log(`Funcion flecha, simplificada ${sumarFlechaSimple(10, 30)}`);
console.log("====");

//PROXIMA FUNCION ES UN EJERCICIO SIMPLE, CREAR UNA FUNCION FLECHA QUE RETORNE EL MENSAJE 'HOLA MUNDO'
let saludar = () => "HOLA MUNDO";
console.log(`Funcion saludar ${saludar()}`);
console.log("====");

//FUNCION DE FLECHA SIN PARENTESIS, ESTO ES SIEMPRE Y CUANDO SEA UN SOLO PARAMETRO
let saludarNombre = parametro => `Hola ${parametro}`;
console.log(`Funcion saludar con parametro sin () ${saludarNombre('Oscar')}`);

//EN EL EJERCICIO DE DESTRUCTURACION, VAMOS A OCUPAR EL MISMO OBJETO DEADPOOL Y VAMOS A TRANSFORMAR SU FUNCION 
//EN UNA FUNCION DE FLECHA
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() { return `${this.nombre} ${this.apellido} - poder: ${this.poder}` },
};

console.log(deadpool.getNombre());

//EL RESULTADO VA A SER UNDEFINE ... PUESTO QUE EL THIS VA A TOMAR VALORES FUERA DE LA FUNCION FLECHA