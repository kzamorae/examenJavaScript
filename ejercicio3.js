let cadenaDeTexto= "hola como estas";
let caracterDado= "o";
let cantidadRepetida= 0;


for (let posicion = 0; posicion < cadenaDeTexto.length; posicion++) {
    let obtengoCaracter= cadenaDeTexto.charAt(posicion);
    if (caracterDado==obtengoCaracter) {
        cantidadRepetida++;
    }
}

console.log("La cadena de texto es: " + cadenaDeTexto + " y tiene " + cantidadRepetida + " veces la letra " + caracterDado );