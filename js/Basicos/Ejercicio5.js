/*Escribe una función que reemplace una palabra específica en una cadena con otra
palabra usando replace().
Ejemplo: "Hola mundo", "mundo", "amigo" → "Hola amigo" */

let cadena="Hola Jose Maria";
let nuevacadena="Hola Chema"

const reemplazar=(cadena,nuevacadena)=>{
    let nueva=cadena.replace(nuevacadena);
    console.log(nueva);
}
reemplazar(nuevacadena);