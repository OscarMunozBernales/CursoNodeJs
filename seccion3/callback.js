//EN ESTE CAPITULO VAMOS A VER LOS CALLBACK
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Oscar',
        id
    };

    if (id === 20) {
        callback(`El usuario con ${id} no se encuentra en la BD`)
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log(usuario);
    }
});