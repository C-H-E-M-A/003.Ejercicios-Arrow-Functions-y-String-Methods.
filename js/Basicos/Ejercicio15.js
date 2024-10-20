/*Crea una función que devuelva el último carácter de una cadena sin usar length.
Ejemplo: "Hola" → "a"*/

let cadena="chema";

const caracater=(cadena)=>{
    let nueva=cadena.charAt((cadena.length)-1);
    console.log(nueva);
}
caracater(cadena);