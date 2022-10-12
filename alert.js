
//alert = imprme uma mensagem para o usuário
//confirm =Faz uma pergunta de sim ou não
//prompt = pede que seja digitado dados de entrada


//alert('Aqui inserimos nossa mensagem.');
//Exercício: Peça ao usuário que digite 2 números e imprima a soma na tela

let num1 = prompt('Digite um número:');
let num2 = prompt('Digite outro número:');
num1 = Number(num1);
num2 = Number(num2);
let soma = num1 + num2

console.log(soma);

//templates strings usa-se o sinal de crase e chama a variavel como ${nome da variavel}
alert(`A soma dos números informados é:  ${soma}`);

