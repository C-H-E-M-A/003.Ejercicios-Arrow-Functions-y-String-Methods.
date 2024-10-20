/*Crea una función que elimine las letras consecutivas repetidas en una cadena.
Ejemplo: "aabbccdde" → "abcde"*/


let cadena="hsakjd hjkdh klsdjkhnm nsasdh";
const eliminarRepetidasConsecutivas=(cadena)=> {
    console.log(cadena.split('').filter((char, index, arr) => char !== arr[index - 1]).join(''));
}
eliminarRepetidasConsecutivas(cadena);