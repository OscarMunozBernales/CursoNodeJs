/**
 * Async - Await
 */


let getNombre = async() => {
    return 'Oscar';
}

//VA A RETORNAR UNA NUEVA PROMESAS CON SOLO COLOCAR EL ASYNC
console.log(getNombre());

getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log(`Error de JS`)
});

//=====================================================================================

let getNombre2 = () => {

    return new Promise((exito, error) => {
        setTimeout(() => {
            exito('Oscar');
        }, 3000);
    });

};

//SE QUIERE HACER UN SALUDO AL NOMBRE RETORNADO DE LA FUNCION getNombre2
let saludo = async() => {


    let nombre = await getNombre2();
    return `Hola ${nombre}`;

}

saludo().then(nombre => {
    console.log(nombre);
});


/**
 * EN RESUMEN LOS ASYNC SON FUNCIONES QUE SI O SI VAN A RETORNAR UNA PROMESA
 * MIENTRAS QUE LOS AWAIT SE USAN PARA ESPERAR UN VALOR, PERO LOS AWAIT SE TIENEN QUE OCUPAR DENTRO DE UNA FUNCION ASYNC
 * ESTO QUIERE DECIR QUE LOS ASYNC SON INDEPENDIENTE Y LOS AWAIR SON INDEPENDIENTE DE LOS ASYNC
 */