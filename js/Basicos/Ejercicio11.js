/*Crea una función que tome una cadena y la devuelva invertida.
Ejemplo: "Hola" → "aloH"*/

let cadena="Chema";

const invertido=(cadena)=>{
    let nuevo=cadena.split("");
    let nuevo1=nuevo.reverse();
    let nuevo2=nuevo1.join("");
    console.log(nuevo2);
}
invertido(cadena);