//AULA 12 - LAÇOS

//Exercícios de interpretação de código

/*
1.
O código soma os valores da variável valor a cada laço.
10
*/

/*
2.
a)
19
21
23
25
27
30

b)
Sim, poderia ser declarado uma variável para receber o valor do índice.
E a cada laço deveria ser incrementado +1 nessa variável.
*/

//Desafio 1
//Ele vai imprimir 4 linhas com zeros.


//**Exercícios de escrita de código**

/*
3.
a)
let arrayOriginal = [0, 1, 2, 3, 4, 5]

for(let numeros of arrayOriginal){
    console.log(numeros);
}
*/

/*
b)
let arrayOriginal = [0, 1, 2, 3, 4, 5]

for(let numeros of arrayOriginal){
    console.log(numeros/10)
}
*/

/*
c)
let arrayOriginal = [0, 1, 2, 3, 4, 5]
let arrayPar = [];

for(let numeros of arrayOriginal){
    if (numeros % 2 == 0){
        arrayPar.push(numeros)
    }
}
console.log(arrayPar)
*/

/*
d)
let arrayOriginal = [0, 1, 2, 3, 4, 5]
let novoArray = []

for(let i=0; i<arrayOriginal.length; i++){
    novoArray[i] = `O elemento do index ${i} é o número ${arrayOriginal[i]}`
}
console.log(novoArray)
*/

/*
e)
let arrayOriginal = [0, 1, 2, 3, 4, 5]
let valorMaximo = arrayOriginal[0], valorMinimo = arrayOriginal[0];

for (let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] > valorMaximo){
        valorMaximo = arrayOriginal[i]
    } else if (arrayOriginal[i] < valorMinimo){
        valorMinimo = arrayOriginal[i]
    }
}
console.log('Valor máximo = ', valorMaximo)
console.log('Valor mínimo = ', valorMinimo)
*/

/*DESAFIO 2
let tentativas = 0;
const numeroEscolhido = Number(prompt("Digite um número"))
console.log("Vamos jogar!")
let numeroChutado = Number(prompt(""))

while (numeroEscolhido != numeroChutado){
    if(numeroChutado < numeroEscolhido){
        console.log(`O número chutado foi: ${numeroChutado}`)
        console.log('Errou. O número escolhido é maior')
    } else {
        console.log(`O número chutado foi ${numeroChutado}`)
        console.log('Errou. O número escolhido é menor')
    }
    tentativas++
    numeroChutado = Number(prompt("Digite outro número"))
}
console.log('Acertou!')
console.log(`O número de tentativas foi: ${tentativas}`)
*/
