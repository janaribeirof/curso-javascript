//Tipos de Operadores Lógicos
/* 
Aritméticos (mateméticos)
Atribuição
Comparação
Lógicos
Bitwise */

//Operadores Aritiméticos
// + , - , * , / , **

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

//Incremento ++
//Decremento --

let idade = 18;

console.log(++idade);
console.log(idade++);
console.log(idade--);
console.log(--idade); 

//Operadores de Atribuição
// = , += , -= ,
let valorTecladoGamer = 100;
//+= valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
//-= valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//OPERADORES DE IGUALDADE

//Igualdade estrita FORMA RECOMENDADA(compara valores e tipo)
console.log( 1 === 1); //true
console.log( '1' === 1 ); //false

//Igualdade solta (compara apenas valor)
console.log ( 1 == 1); //true
console.log('1' == 1);

//OPERADOR TERNÁRIO recomendado para evitar muito if's
//Tem cliente + 100 pontos = premium com menos comum

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//OPERADORES LÓGICOS:
//Operador lógico e (&&) 
//retorna TRUE se os 2 operandos forem TRUE
console.log(true && true);
console.log(false && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//Operador lógico ou (||)
//retorna true se um dos operandos forem true
let maiorIdade = false;
let temCarteiraDeTrabalho = true;
let podeTrabalhar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ', podeAplicar);

// Operador lógico Não (!)

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado', candidatoRecusado);

//COMPARAÇÕES LÓGICAS(NÃO BOOLEANOS):

//falsy: undefined, null, 0, false, '' NaN
///Truthy: || precisa apenas encontrar o 1º valor truthy para para com a comparção.

let corPersonalizada = 'vermelho';
let corPadrao =  'azul';
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil);











