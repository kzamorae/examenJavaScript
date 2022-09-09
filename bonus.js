let cadenaDeTexto = "www.techacademy.com";
console.log(cadenaDeTexto);

let convertirTexto = "";
let encuentraPunto = 0;

for (let index = 0 ; index <= cadenaDeTexto.length; index++) {
    
    let letra= cadenaDeTexto.charAt(index);
    if (encuentraPunto== 0) {
        letra = letra.toUpperCase();
    }

    modificacionTexto = convertirTexto + letra;
    if (letra==".") {
        encuentraPunto = 1
    }
}

//console.log(convertirTexto);
console.log(modificacionTexto);