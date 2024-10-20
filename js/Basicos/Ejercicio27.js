/*Crea una función que convierta una cadena a formato snake_case.
Ejemplo: "Hola Mundo" → "hola_mundo"*/

let cadena="Soy un unicornio";
const convertirCadena=(cadena)=>{
    return cadena.toLowerCase().split(' ').join('_');
}
console.log(convertirCadena(cadena));