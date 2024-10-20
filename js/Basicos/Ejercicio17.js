/*Crea una función que cuente cuántas palabras hay en una cadena usando split() y
length.
Ejemplo: "Aprender JavaScript es divertido" → 4*/

let cadena="Un Unicornio Esta Solo En Marte";

const contarpalabra=(cadena)=>{
    let contar=cadena.split(" ");
    let contarpalabras=contar.length;
    console.log(cadena+" -> "+contarpalabras);
}
contarpalabra(cadena);