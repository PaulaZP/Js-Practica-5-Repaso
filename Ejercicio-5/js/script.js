let numero = parseInt(prompt('Digite un número para adivinarlo'));
const secreto = 14;

while(numero != secreto && numero != 0){
    numero = parseInt(prompt('Digite un número para adivinarlo'));
    if(numero < 100 && numero > 1){
        if(numero == secreto){
            console.log('Adivinaste el número');       
        }else if(numero < secreto){
            console.log(`${numero} El número es menor al número secreto`);
        }else if(numero > secreto){
            console.log(`${numero} El número es mayor al número secreto`);
        }
    }else{
        console.log('Error te saliste del rango');
    }
}