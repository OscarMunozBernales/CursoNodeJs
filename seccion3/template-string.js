let nombre = 'DeadPool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);

/*LOS TEMPLATES LITERARIOS SON ESTADOS DOS ``*/

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate);

function getNombreReal() {
    return `${nombre} es ${real}`;
}

console.log(`El nombre de: ${getNombreReal()}`);