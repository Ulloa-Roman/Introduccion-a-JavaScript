function calcularPromedio(array) {
    let suma = 0
    for(let numeros of array) {
        suma += numeros
    }
    let promedio = suma / array.length;
    return "el promedio es: " + promedio
}

console.log(calcularPromedio([2,2,2,2]));
    