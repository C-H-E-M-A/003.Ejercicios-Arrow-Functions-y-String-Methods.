/*Escribe una función que elimine todas las vocales de una cadena.
Ejemplo: "javascript" → "jvscrpt"*/

let cadena="Chema";

const eliminaraeiou=(cadena)=>{
    let nuevo=cadena.replace(/[aeiou]/gi, '');
    console.log(nuevo);
}
eliminaraeiou(cadena);