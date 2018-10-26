const fs = require('fs');

//ESTA SERIA OTRA FORMA DE EXPORTAR UNA FUNCION

//modulo.exports.crearArchivo = () => {...}
let crearArchivo = (base) => {
    return new Promise((exito, error) => {

        if (!Number(base)) {
            error(`La base (${base}) no es un numero`);
            return;
        }
        let data = '';

        for (let multlipo = 1; multlipo <= 10; multlipo++) {
            data += `${base} * ${multlipo}: ${multlipo * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                error(err);
            else
                exito(`tabla-${base}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado con exito!`);
        });

    });




};

//ESTA ES UNA FORMA DE EXPORTAR LA FUNCION
module.exports = {
    crearArchivo,
}