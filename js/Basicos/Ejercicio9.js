/*Crea una función que convierta la primera letra de una cadena en mayúscula.
Ejemplo: "javascript" → "Javascript"*/

let cadena="chema";

const PrimeraLetraMayuscula=(cadena)=>{
    let nueva=cadena.charAt(0).toUpperCase()+cadena.slice(1);
    console.log(nueva);
}
PrimeraLetraMayuscula(cadena);