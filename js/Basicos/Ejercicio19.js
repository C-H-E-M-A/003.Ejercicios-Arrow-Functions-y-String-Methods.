/*Crea una función que verifique si una cadena comienza con una palabra específica
usando startsWith().
Ejemplo: "JavaScript es genial", "JavaScript" → true*/

let cadena="Bienvenido chema";
let palabra="Bienvenidos";

const verificar=(cadena,palabra)=>{
    let nuevo=cadena.startsWith(palabra);
    console.log(nuevo);
}
verificar(cadena,palabra);