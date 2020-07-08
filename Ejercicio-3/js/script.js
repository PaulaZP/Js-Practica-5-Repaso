let linea_texto = prompt('Escriba una linea de texto').split(''); // split convierte de string a un arreglo

console.log(linea_texto);
linea_texto.reverse(linea_texto); // convierte la palabra al reves
console.log(linea_texto.join(' ')); // convierte de un arreglo a un string