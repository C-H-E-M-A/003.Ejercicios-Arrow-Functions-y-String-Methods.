/*Crea una función que reciba dos cadenas y las concatene usando concat() o +.
Ejemplo: "Hola", "mundo" → "Hola mundo"*/

let cadena1="Hola chema bienvenido,";
let cadena2="a java script"

const unir=(cadena2,cadena1)=>{
    let cadena=cadena1.concat(cadena2);
    console.log(cadena);
}
unir(cadena2,cadena1)