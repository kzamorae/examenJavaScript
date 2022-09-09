function generarAleatorio () {
let resultadoNumero = Math.floor(Math.random()* 100);
    return  resultadoNumero;
}
for (let index = 1; index < 5; index++) {
    let numeroGenerado = generarAleatorio();

    console.log ("Interaccion " + index + "el numero generado es " + numeroGenerado);
    if (numeroGenerado % 2 == 0){
        console.log (" Es par");
    } else {
        console.log (" Es impar ");
    }
}
