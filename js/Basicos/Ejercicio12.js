/*Escribe una función que determine si una palabra es un palíndromo (se lee igual al
revés).
Ejemplo: "ana" → true*/

let cadena="oso"

const palíndromo=(cadena)=>{
    let nueva=cadena.split("").reverse().join("");

    if (cadena=== nueva){
        console.log("La palabra " +cadena+" es una palabra polidromo");
    } else {
        console.log("La palabra "+cadena+" no es una palabra polidromo")
    }
}
palíndromo(cadena);