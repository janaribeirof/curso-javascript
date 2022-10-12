/*4.for..in (feitos para trabalhar com propriedades de um objeto com elementos de um array)
*/
const pessoa = {
    nome: 'Jhonatan',
    idade: 25
};
//key-value
for(let chave in pessoa) {
    console.log(chave, pessoa.nome); // ou pessoa['nome']

}

const cores = ['vermelho', 'azul', 'branco'];
    
for (let indice in cores) {
    console.log(indice, cores[indice])
}

