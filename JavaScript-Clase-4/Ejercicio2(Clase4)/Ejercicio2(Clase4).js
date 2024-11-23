function longitud(array, numero){
    let arrayNuevo = [];
    for(let palabras of array){
        if(palabras.length > numero){
            arrayNuevo.push(palabras);
        }
    }
    return arrayNuevo;
}

console.log(longitud(["gola", "hello", "co"], 2)); 
