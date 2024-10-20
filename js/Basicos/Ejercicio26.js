/*Escribe una función que encuentre la palabra más larga en una cadena.
Ejemplo: "Aprender JavaScript es emocionante" → "emocionante"*/


let cadena = "Un unicornio en la universidad";

function palabraLarga(cadena) {
    let dividirPalabras = cadena.split(' ');

    let masLargo = dividirPalabras.reduce((a, b) => {
        if (a.length > b.length) {
            return a;
        } else {
            return b;
        }
    });

    return masLargo;
}

console.log(palabraLarga(cadena));