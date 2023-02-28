// Variables
let cantidadAlumnos = 0;
let sumaEdades = 0;
let promedio = 0;
let continuar = true;

// Calcula el promedio de edades de los alumnos
const calcularPromedio = (alumnos, edades) => {
    return edades / alumnos;
}

// Indica si un valor es numerico
const esNumero = (valor) => {
    return !isNaN(valor) && isFinite(valor);
}

do {
    let edad = prompt('Ingrese la edad del alumno:');

    if (edad.toUpperCase() === "FIN") {
        if (cantidadAlumnos > 0) {
            promedio = calcularPromedio(cantidadAlumnos,sumaEdades);
            alert('El promedio de edad es: ' + promedio);
            continuar = false;
        } else {
            alert('No se cargaron edades de alumnos');
        }
    } else if (esNumero(edad)) {
        cantidadAlumnos++;
        sumaEdades += parseFloat(edad);
    } else {
        alert('La edad ingresada no es válida');
    }
} while (continuar)