let texto = prompt('Digite un texto').toLowerCase(); //toLowerCase sirve para pasar a minusculas
let caracter = prompt('Digite un caracter').toLowerCase();
let arreglo = [];

for(let i = 0; i < texto.length; i++){
    if(texto[i] == caracter){
        arreglo.push(i);  //.push agregar cosas al arreglo
    }   
}
console.log('Caracter:',caracter);
console.log('Cantidad de caracteres:',arreglo.length);