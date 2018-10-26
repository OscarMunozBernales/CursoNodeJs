/**
 *  VAMOS A GUARDAR LOS RESULTADOS DE LA MULTIPLICACION EN UN ARCHIVO TXT, ES POR ESTO
 *  QUE VAMOS A NECESITAR EL SIGUIENTE PAQUETE
 *  https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_file_system
 */

const { crearArchivo } = require('./multiplicar/multiplicar');


let base = 'abc';

crearArchivo(base)
    .then(archivo => console.log(`El archivo ${archivo} ha sido creado exitosamente!`))
    .catch(err => console.log(err));
/*
let data = '';

for (let multlipo = 1; multlipo <= 10; multlipo++) {
    data += `${base} * ${multlipo}: ${multlipo * base}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido creado con exito!`);
});
*/