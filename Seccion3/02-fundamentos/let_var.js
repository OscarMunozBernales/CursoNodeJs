//UNA DE LAS PRINCIPALES CARACTERISTICAS DE LAS VARIABLES CON LET ES QUE NO SE PUEDEN VOLVER A 
//INICIALIZAR A DIFERENCIA DE LAS VARIABLES INICIALIZADAS CON VAR

var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';
var nombre_var = 'Oscar';

let nombre_let = 'Oscar M';
nombre_let = 'Oscar M';
nombre_let = 'Oscar M';
nombre_let = 'Oscar M';
nombre_let = 'Oscar M';
nombre_let = 'Oscar M';

//Tambien existe una diferencia en los ciclos, por ejemplo en un for
for (var i = 0; i <= 5; i++) {
    console.log(`i: ${ i }`);
}

console.log(`i: ${ i }`);

for (let j = 0; j <= 5; j++) {
    console.log(`i: ${ j }`);
}

console.log(`i: ${ j }`);

//Al compilar va a existir un error, en donde marcara que la variable j no existe.

var i = 0;
while (i < 5) {
    let j = 1;
    i++;
}
console.log(`i: ${ i }, j: ${ j }`);

//Pasa de la misma forma.