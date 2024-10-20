/*Escribe una función que cuente la frecuencia de cada carácter en una cadena y
devuelva un objeto con los resultados.
Ejemplo: "abbccc" → {a: 1, b: 2, c: 3}*/

let cadena="Hola Mundo";
function contarFrecuenciaCaracteres(cadena) {
    let frecuencia = {};

    for (let char of cadena) {
        if (frecuencia[char]) {
            frecuencia[char]++;
        } else {
            frecuencia[char] = 1;
        }
    }

    console.log(frecuencia);
}
contarFrecuenciaCaracteres(cadena);