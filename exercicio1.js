/* 
Janaina Ribeiro tem 38 anos, pesa 78 kg, tem 1.64 de altura e seu Imc é ...
*/

const nome = "Janaina"; 
const sobrenome = "Ribeiro";
const idade = 38;
const peso = 80;
const alturaEmM = 1.64;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg;`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal};`);
console.log(`${nome} nasceu em ${anoNascimento}.`)
