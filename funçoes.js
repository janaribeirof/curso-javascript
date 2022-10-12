//FUNCTION
 /*Como nomer uma função = Verbo+substantivo*/
 let corSite = "azul";
 function resetaCor(){
    corSite = "";
};
console.log(corSite);
resetaCor();

let corMenu = "branco";
function mudarCor(cor, tonalidade){
    corMenu = cor + ' ' + tonalidade;
};
console.log(corMenu);
mudarCor("verde", "claro");
console.log(corMenu);

// Tipos de funções
/*Basicamente no JS temos 2 tipos de funções as que realizam uma tarefa e não retornam nada ex.*/
function dizerNome(){
    console.log('Janaina');
};

dizerNome();

// Faz uma tarefa e retorna algo

function multiplcarPorDois(valor){
    return valor* 2;
}

console.log(multiplcarPorDois(5));
let resultado = multiplcarPorDois(5);