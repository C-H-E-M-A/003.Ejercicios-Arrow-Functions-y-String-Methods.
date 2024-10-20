/* Escribe una función que verifique si una cadena termina con una palabra específica
usando endsWith().
Ejemplo: "JavaScript es genial", "genial" → true*/

let cadena="Bienvenido chema";
let palabra="chema";

const verificar=(cadena,palabra)=>{
    let nuevo=cadena.endsWith(palabra);
    console.log(nuevo);
}
verificar(cadena,palabra);