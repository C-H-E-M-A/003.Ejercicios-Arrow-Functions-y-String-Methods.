/*Crea una función que elimine los espacios en blanco de los extremos de una cadena
usando trim().
Ejemplo: " Hola mundo " → "Hola mundo "*/

let cadena="   Hola Mundo    ";

const sinespacios=(cadena)=>{
    let nueva=cadena.trim();
    console.log(nueva);
}
sinespacios(cadena);