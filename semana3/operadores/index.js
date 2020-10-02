//Exercícios de interpretação de código

/*
1.

const bool1 = true
const bool2 = false
const bool3 = !bool2 //true

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

a. false
b. false
c. false
e. boolean
f. 
*/

/*
2.

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a. undefined 
b. null
c. 11 
d. 3
e. 11
f. 9
*/

//Exercícios de escrita de código

/*
1.
let idade, idadeAmigo, resultado;

idade = prompt("Qual é a sua idade?");
idadeAmigo = prompt("Qual é a idade do seu melhor amigo(a)?");
resultado = Number(idade) > Number(idadeAmigo);

console.log("Sua idade é maior do que a do seu melhor amigo? ", resultado);
*/

/*
2.
let numero, resultado;

numero = prompt("Digite um número par");
resultado = Number(numero) % 2;

console.log("O resto da divisão por 2 é", resultado);

Quando o resto é igual a 0, o número é par. Quando o resto é 1, o número é ímpar.
*/

/*
3.
let listaDeTarefas = [];
let indiceTarefas;
listaDeTarefas[0] = prompt("Tarefa 1 ");
listaDeTarefas[1] = prompt("Tarefa 2 ");
listaDeTarefas[2] = prompt("Tarefa 3 ");

console.log(listaDeTarefas);
indiceTarefas = prompt("Digite o índice da tarefa realizada");

listaDeTarefas.splice(indiceTarefas, 1);
console.log(listaDeTarefas);
*/

/*
4.
let nome, email;

nome = prompt("Digite seu nome");
email = prompt("Digite seu email");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);
*/

//Desafios Extras
/*

1. 
let KELVIN, GRAUS_FAHRENHEIT, GRAUS_CELSIUS;

(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15 ;
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32 ;

GRAUS_FAHRENHEIT = 77;
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15 ;
console.log("77F em K =", KELVIN);

GRAUS_CELSIUS = 80;
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32 ;
console.log("80C em F =", GRAUS_FAHRENHEIT);

GRAUS_CELSIUS = 30;
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32 ;
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15 ;
console.log(`30C equivale a ${GRAUS_FAHRENHEIT}F e a ${KELVIN}K`);

GRAUS_CELSIUS = prompt("Digite um valor em graus C para converter para Fahrenheit e Kelvin");
(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32 ;
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15 ;
console.log(`${GRAUS_CELSIUS}C equivale a ${GRAUS_FAHRENHEIT}F e a ${KELVIN}K`);
*/

/*
2.
let kwHora = 0.05;
let consumo, total;

consumo = 180;
total = Number(consumo) * Number(kwHora);
console.log(`Consumo: ${consumo}kw\n Total a ser pago: R$ ${total}`);

desconto = total * 0.15;
console.log('Total a ser pago com 15% de desconto R$', total*0.85);
*/

/*
3.
a) 
let lbKg = 0.453592;
console.log("20lb equivalem a " + 20*lbKg + " kg");

b)
let ozKg = 0.02834;
console.log("10.5oz equivalem a " + 10.5*ozKg + " kg");

c)
let miM = 1609;
console.log("100mi equivalem a " + 100*miM + " m");

d)
let ftM = 0.3048;
console.log("50ft equivalem a " + 50*ftM + " m");

e)
let galL= 3.78541;
console.log("103.56gal equivalem a " + 103.56*galL + " l");

f)
let xiL = 0.25;
console.log("450 xic equivalem a " + 450*xiL + " l");
 
g) 
let valor;
let xiL = 0.25;

valor = prompt("Digite um valor em xícaras para converter em litros");
console.log(valor + " xic equivalem a " + valor*xiL + " l");
*/


