/*Crea una función que reemplace todas las ocurrencias de una palabra en una
cadena usando replaceAll().
Ejemplo: "hola hola", "hola", "adiós" → "adiós adiós"*/

let cadena="Hola Chema";

const reemplazar=(cadena)=>{
    let nuevo=cadena.replaceAll("Hola","Me llamo");
    console.log(nuevo);
}
reemplazar(cadena);