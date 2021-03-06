const argv = require('./config/yargs').argv;
const color = require('colors');

const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
          console.log('==================Por hacer===================='. green);
          console.log(tarea.descripcion);
          console.log('Estado: ', tarea.completado);
          console.log('==============================================='. green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}
