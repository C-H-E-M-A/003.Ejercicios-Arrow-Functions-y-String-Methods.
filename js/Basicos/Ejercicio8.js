/*Escribe una función que devuelva una parte de una cadena usando substring().
Ejemplo: "JavaScript", 4, 10 → "Script"*/

let cadena="Hola Chema";

const substring=(cadena)=>{
    let nueva=cadena.substring(4,10);
    console.log(nueva);
}
substring(cadena);