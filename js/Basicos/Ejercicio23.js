/*Crea una función que trunque una cadena a un número específico de caracteres,
agregando ... al final si es más larga.
Ejemplo: "JavaScript es genial", 10 → "JavaScri..."*/



let cadena='Hola me llamo chema, soy de la cumunidad de acuimantla';
let numCaracter=20;
function truncarCadena(cadena,numCaracter){
    let truncarCadena=cadena.slice(0,numCaracter);
    console.log('cadena truncada: '+truncarCadena);
    if (cadena.length >= truncarCadena.length){
        console.log('la cadena es mas larga')
    }else{
        console.log('la cadena se completa ya que no tiene suficientes elementos')
    }
}
truncarCadena(cadena,numCaracter)
