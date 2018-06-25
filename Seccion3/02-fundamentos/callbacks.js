setTimeout(() => {
    console.log('Hola mundo');
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Oscar',
        id, //Puede ser tambien escrito de la siguiente manera id: id
    }

    callback(usuario);
}

getUsuarioById(10, (usuario) => {
    console.log('EL usuario rescatado de la base de datos: ', usuario);
});