//Creo objetos en base a los alumnos existentes para almacenar sus datos, en este caso, sus calificaciones.

let alumno1 = {
    nombre: "Gustavo",
    calificacion1: 7,
    calificacion2: 8
}

let alumno2 = {
    nombre: "Juan",
    calificacion1: 8,
    calificacion2: 9
}

let alumno3 = {
    nombre: "Maria",
    calificacion1: 9,
    calificacion2: 9
}

let alumno4 = {
    nombre: "Fatima",
    calificacion1: 10,
    calificacion2: 9
}

//Creo un array para almacenar a todos los objetos de alumnos.

let alumnos = [alumno1, alumno2, alumno3, alumno4];

//Uso un bucle for...of para calcular la media de las calificaciones.

for (let alumno of alumnos) {
    suma = alumno.calificacion1 + alumno.calificacion2;
    media = suma / 2;
    console.log(`Las calificaciones de ${alumno.nombre} son ${alumno.calificacion1} y ${alumno.calificacion2}. Su media es ${media} `);
}