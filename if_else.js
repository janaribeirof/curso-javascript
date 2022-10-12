//If... Else

//Pegue a hora atual e de acordo com ela exiba uma mensagem diferente.

//se a hora estiver entre as 06:00 até 12:00 : Bom dia!
//se estiver entre 12:00 até 18:00 : boa tarde!
//caso contrário : Boa noite!

/*
if (condição) {
    //código a ser executado
}
else if (outra condição) {
    //codigo a ser executado
}
else {
    //codigo a ser executado
}*/

let hora = 16;

if (hora > 6 &&  hora < 12) {
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
}
else {
    console.log('Boa noite!');
};
