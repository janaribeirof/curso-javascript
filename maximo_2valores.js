/*Exércicios: escreva uma função que usa 2 números e retorna o mario entre eles*/

/*let valorMaior = max(10, 1);
console.log(valorMaior);

function max(numero1, numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
};*/

// maneira mas simples com operador ternario

let valorMaior = max(10, 20);
console.log(valorMaior);

function max(numero1, numero2) {
    return numero1>numero2 ? numero1: numero2;
};