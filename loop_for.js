//Usamos quando queremos repetir uma ação várias vezes.Laço

/*Maneira errada
console.log('Estou aprendendo!'); 
console.log('Estou aprendendo!'); 
console.log('Estou aprendendo!'); 
console.log('Estou aprendendo!'); 
console.log('Estou aprendendo!'); 
*/

// Maneira Correta usar o Loop ou Laços em portugues. Basicamente fazem a mesma coisa em cenários diferentes
//1.For
//2.While
//3.Do..While
//4.For..In
//5.For..of

//1.For (imcremento mas utilizado)

/*for(let i = 1;i <=5; i++){// i= variavel de indice
    console.log('Estou aprendendo!', i);
}*/

//imprimindo somente impares

for(let i = 1;i <=5; i++){// i= variavel de indice
    if(i % 2 !== 0){
        console.log(i);
    }
};

//imprimindo decrescente

for(let i = 5;i <=1; i--){// i= variavel de indice
    console.log('Estou aprendendo!', i);
};


