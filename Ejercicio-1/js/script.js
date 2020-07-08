let usuario = parseInt(prompt('Digite un año'));

if(usuario % 4 == 0 && usuario % 100 != 0 || usuario % 400 == 0){
    console.log((usuario),'Es un año bisiesto');
}else{
    console.log((usuario),'No es un año bisiesto');
}