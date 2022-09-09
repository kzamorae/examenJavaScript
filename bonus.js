let cadenaDeTexto = "www.techacademy.com";
console.log(cadenaDeTexto);

<<<<<<< HEAD
let modificacionTexto = " ";
=======
let modificacionTexto = "";
>>>>>>> 24c5a4ba1e011be9439d875fbbd1261676423f42
let encuentraPunto = 0;

for (let index = 0 ; index <= cadenaDeTexto.length; index++) {
    
    let letra= cadenaDeTexto.charAt(index);
    if (encuentraPunto== 0) {
        letra = letra.toUpperCase();
    }

    modificacionTexto = modificacionTexto + letra;
    if (letra==".") {
        encuentraPunto = 1
    }
}

<<<<<<< HEAD
=======

>>>>>>> 24c5a4ba1e011be9439d875fbbd1261676423f42
console.log(modificacionTexto);