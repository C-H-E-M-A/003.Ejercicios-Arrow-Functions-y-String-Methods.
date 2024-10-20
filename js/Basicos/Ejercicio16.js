/*Escribe una función que divida una cadena en un array de palabras usando split().
Ejemplo: "Hola mundo" → ["Hola", "mundo"] */

let cadena="Hola chema";

const divida=(cadena)=>{
    let nueva=cadena.split(" ");
    console.log(nueva);
}
divida(cadena);