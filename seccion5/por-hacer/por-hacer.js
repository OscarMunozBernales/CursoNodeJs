const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('DB/data.json', data, (err) => {
    if(err) throw new Error('No se pudo grabar', err);
  })
}

const cargarDB = () => {
  try{
    listadoPorHacer = require('../DB/data.json');
  }catch(err){
    listadoPorHacer = [];
  }
}

const crear = (descripcion) => {
  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  }

  listadoPorHacer.push(porHacer);

  guardarDB();

  return porHacer;

}

function getListado(){
  cargarDB();
  return listadoPorHacer;
}

module.exports = {
  crear,
  getListado
}
