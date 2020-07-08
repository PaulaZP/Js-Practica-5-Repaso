let num = parseInt(prompt('Digite un número'));

if(!isNaN(num) && num >= 2){
    let contador = 0;
    let primo = true;

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            primo = false;
        }
    }

    if(primo == true){
        console.log('El número que digito es primo');
    }else{
        console.log('El número que digito es compuesto');
    }
}else{
    console.log('Error');
}