let empleados = [{
        id: 1,
        nombre: 'Oscar'
    },
    {
        id: 2,
        nombre: 'Stephanie'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3000
    },
];

let getEmpleados = (id, callback) => {
    let empladoDB = empleados.find(empleado => empleado.id === id);
    if (!empladoDB) {
        //callback()
    }
}

getEmpleados(10);