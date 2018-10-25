/**
 * LAS PROMESAS NOS PERMITEN EJECUTAR UN TRABAJO YA SEA SINCRONO O ASYNCRONO Y DESPUES QUE SE RESUELVA LA TAREA
 * REALIZAR UN TRABAJO EN PARTICULAR 
 */

let empleados = [{
    id: 1,
    nombre: 'Oscar'
}, {
    id: 2,
    nombre: 'Bruno'
}, {
    id: 3,
    nombre: 'Sujeto de pruebas'
}];

let salarios = [{
    id: 1,
    salario: 100000
}, {
    id: 2,
    salario: 200000
}];

//AHORA VAMOS A CREAR LA PROMERA

let getEmpleado = (id) => {

    /**
     * LAS PROMESAS SUN UNA CARACTERISTICA DEL ES6
     * Al momento de crearlas resiven dos parametros, resolve y reject
     * el resolve se va a llamar si la promesa es exitosa y el reject se va a llamar si no es exitosa.
     */
    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (empleadoDB) { //SE ENCONTRO UN EMPLEADO
            resolve(empleadoDB); //OJO QUE TANTO EL RESOLVE COMO EL REJECT NO PUEDEN TENER MAS DE UN PARAMETRO
        } else { // NO SE ENCONTRO UN EMPLEADO
            reject(`No existe un empleado con el ID ${ id }`);
        }

    });
};


getEmpleado(1).then(empleado => {
    console.log(`Empleado de BD: ${ empleado.nombre }`);
    console.log("====================================================================");
}, err => {
    console.log(`${err}`);
    console.log("====================================================================");
});
//LA PROXMIA PROMESA ES UNA TAREA DEL CURSO

let getSalario = (id) => {

    return new Promise((exito, error) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (empleadoDB) {
            let salarioDB = salarios.find(salario => salario.id === id);

            if (salarioDB) {
                exito({
                    empleado: empleadoDB,
                    salario: salarioDB
                });
            } else {
                error(`No existe un salario para el empleado ${ empleadoDB.nombre }`);
            }
        } else {
            error(`No existe un empleado con el ID ${ id }`);
        }
    });

}

getSalario(3).then(exito => {
    console.log(exito);
    console.log("====================================================================");
}, error => {
    console.log(error);
    console.log("====================================================================");
});