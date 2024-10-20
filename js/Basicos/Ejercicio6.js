/*Crea una función que repita una cadena un número específico de veces usando
repeat().
Ejemplo: "Ho", 3 → "HoHoHo" */

let cadena="chema"; //Asi i se puede usar
let cadena1=["chema","lili"];//Asi no

const repetir=(cadena)=>{
    let nueva=cadena.repeat(3);
    console.log(nueva);
}
repetir(cadena);