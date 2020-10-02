//AULA 11 - CONDICIONAIS

//Exercícios de interpretação de código

/*
1.
O código recebe um número do usuário e testa se ele é par ou ímpar.
Caso seja par (resto = 0), imprime "Passou no teste".
Caso seja ímpar (resto = 1), imprime "Não passou no teste."
*/

/*
2.
a) O código serve para identificar qual fruta foi escolhida e imprime o valor da mesma.
b) O preço da fruta Maçã é R$ 2.25
c) O preço da fruta Pêra é R$ 5 
*/

/*
3.
a) A primeira linha recebe um número do tipo Number digitado pelo usuário.
b) Esse número passou no teste.
Se fosse -10, não apareceria nenhuma mensagem.
c) Não, pois o número -10 não atende nenhuma das condições do código.
*/

//**Exercícios de escrita de código**
/*
4.
let idade = Number(prompt("Qual a sua idade?"));

if(idade >= 18){
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir");
}
*/

/*
5.
let turno = prompt("Qual turno você estuda? M(matutino), V(vespertino) ou N(noturno)?").toLowerCase();

if (turno == "m"){
    console.log("Bom dia!");
} else if (turno == "v") {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}
*/

/*
6.
let turno = prompt("Qual turno você estuda? M(matutino), V(vespertino) ou N(noturno)?").toLowerCase();

switch (turno){
    case "m":
        console.log("Bom dia!");
        break;
    case "v":
        console.log("Boa tarde!");
        break;
    case "n":
        console.log("Boa noite!");
        break;
    default:
        console.log("Turno inválido");
        break;
}
*/

/*
7.
let generoFilme = prompt("Qual o gênero de filme vocês vão assistir?").toLowerCase();
let precoIngresso = Number(prompt("Qual é o preço do ingresso?"));

if(generoFilme == "fantasia" && precoIngresso < 15){
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme");
}
*/

//DESAFIO 
/*
1.
let generoFilme = prompt("Qual o gênero de filme vocês vão assistir?").toLowerCase();
let precoIngresso = Number(prompt("Qual é o preço do ingresso?"));
let snack; 
if(generoFilme == "fantasia" && precoIngresso < 15){
    snack = prompt("Qual snack você vai comprar?");
    console.log(`Bom filme com ${snack}!`);
} else {
    console.log("Escolha outro filme");
}
*/

2.
const cliente = prompt("Digite seu nome completo").toUpperCase();
const tipoJogo = prompt("Qual o tipo de jogo?\n[IN] Internacional ou [DO] Doméstico?").toUpperCase();
const etapaJogo = prompt("Qual a estapa do jogo?\n [SF] Semi-final, [DT] Decisão de terceiro lugar ou [FI] Final?").toUpperCase();
const categoria = Number(prompt("Escolha uma categoria: 1, 2, 3 ou 4"));
let qtdIngresso = Number(prompt("Qual a quantidade de ingressos?"));
let valorIngresso, valorTotal;
let msgTipoJogo, msgEtapaJogo;

switch (tipoJogo) {
    case 'IN':
        msgTipoJogo = 'Internacional';
        break;
    default :
        msgTipoJogo = 'Doméstico';
        break;
}

switch (etapaJogo) {
    case 'SF':
        msgEtapaJogo = 'Semi-final';
        break;
    case 'DT' :
        msgEtapaJogo = 'Decisão de terceiro lugar';
        break;
    case 'FI':
        msgEtapaJogo = 'Final';
        break;
    default :
        msgEtapaJogo = 'Etapa inválida'
        break;
}

if (etapaJogo == 'SF'){
    switch (categoria) {
        case 1:
            valorIngresso = 1320; 
            break;
        case 2 :
            valorIngresso = 880;
            break;
        case 3:
            valorIngresso = 550;
            break;
        case 4 :
            valorIngresso = 220;
        default :
            msgEtapaJogo = 'Categoria inválida'
            break;
    }

} else if (etapaJogo == 'DT'){ 
    switch (categoria) {
        case 1:
            valorIngresso = 660; 
            break;
        case 2 :
            valorIngresso = 440;
            break;
        case 3:
            valorIngresso = 330;
            break;
        case 4 :
            valorIngresso = 170;
        default :
            msgEtapaJogo = 'Categoria inválida'
            break;
    } 
} else {
    switch (categoria) {
        case 1:
            valorIngresso = 1980; 
            break;
        case 2 :
            valorIngresso = 1320;
            break;
        case 3:
            valorIngresso = 880;
            break;
        case 4 :
            valorIngresso = 330;
        default :
            msgEtapaJogo = 'Categoria inválida'
            break;
    }
}

console.log('---Dados da Compra---');
console.log(`Nome do cliente: ${cliente}`);
console.log(`Tipo do jogo: ${msgTipoJogo}`);
console.log(`Etapa do jogo: ${msgEtapaJogo}`);
console.log(`Categoria: ${categoria}`);
console.log(`Quantidade de ingressos: ${qtdIngresso}`);
console.log('---Valores---');

if (tipoJogo == 'DO'){
    valorTotal = valorIngresso * qtdIngresso ;
    console.log(`Valor do ingresso: R$ ${valorIngresso}`);
    console.log(`Valor total: R$ ${valorTotal}`);
} else {
    valorIngresso = valorIngresso / 4.10 ; 
    valorTotal = (valorIngresso * qtdIngresso); 
    console.log(`Valor do ingresso: US ${valorIngresso}`);
    console.log(`Valor total: U$ ${valorTotal}`);
}
