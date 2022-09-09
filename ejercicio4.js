let arregloOriginal = [23,5,34,56,98,"cadena",7];
let arregloInvertido = new Array;
console.log("El arreglo original es: ");
console.log(arregloOriginal);

for (let index = arregloOriginal.length -1 ; index >= 0; index--) {
    arregloInvertido.push(arregloOriginal[index]);
}

console.log("El arreglo invertido es: ");
console.log(arregloInvertido);
5