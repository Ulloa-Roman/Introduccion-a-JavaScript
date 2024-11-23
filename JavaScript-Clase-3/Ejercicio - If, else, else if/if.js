const calificacion = prompt("Ingrese su calificacion de 0 a 100: ");

//Establezco un IF para que si la persona ingresa un numero mayor o igual a 90 se muestre por consola "a".

if (calificacion >= 90) {
    console.log("a")
}

//Luego, agregue ELSE IF para que el programa sepa que hacer si no se cumple el if principal, pero estableciendo nuevas condiciones.

else if(calificacion >= 80 && calificacion <= 89) {
    console.log("b")
}

else if(calificacion >= 70 && calificacion <= 79) {
    console.log("c")
}

else if(calificacion >= 60 && calificacion <= 69) {
    console.log("d")
}

//Ya al final del codigo, mediante el uso de ELSE, le digo al programa que tiene que hacer si no se cumple ninguna condicion anterior.

else {
    console.log("f")
}