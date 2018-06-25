/*
|   Async - Await
*/

//Creando una promesa normal
let getNombrePromesa = () => {
    return new Promise((resolve, reject) => {
        resolve('Oscar');
    });
};

//Creando una funcion con Async

let getNombreAsync = async() => {
    return 'Oscar';
};


getNombreAsync().then(nombre => {
    console.log(nombre);
}).catch(e => console.log("EL error es: ", e));