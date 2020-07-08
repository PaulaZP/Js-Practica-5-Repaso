const numeros = parseInt(prompt('Digite un número'));
let suma = 0;
let i = 1;

while(i <= numeros){
    suma = suma + i;
    console.log(i);
    i++;
}

console.log('Resultado de la suma es:',suma);


