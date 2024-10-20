/*Escribe una función que cuente cuántas veces aparece una letra específica en una
cadena.
Ejemplo: "javascript", "a" → 2*/

let cadena="Perroo";
let buscando="o";

const repetidos=(cadena,buscando)=>{
    let nueva=cadena.split(buscando).length - 1;
    console.log(nueva)
}
repetidos(cadena,buscando)