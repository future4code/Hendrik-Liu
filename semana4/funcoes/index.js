//AULA 14 - FUNÇÕES

//Exercícios de interpretação de código
/*
1.
a)
10
50

b)
Não retonaria nada no console
*/

/*
2.
a) 
Darvas
Caio

b)
Amanda
Caio
*/

/*
3.
A função recebe um array e verificar se o índice é par.
Se sim, faz a multiplicação do índice * índice e adiciona ao arrayFinal.
A função poderia se chamar ParesQuadrados.
*/

//Exercícios de escrita de código
/*
//4.a
function imprimeMsg (){
    console.log('Eu sou o Hendrik, tenho 32 anos, moro em São Paulo e sou estudante.');
}
imprimeMsg();
*/

/*
//b)
function imprimeMsg (nome, idade, cidade, estudante){
    if (estudante){
        console.log(`Eu sou ${nome}, tenho ${idade} ano(s), moro em ${cidade} e sou estudante.`)
    } else {
        console.log(`Eu sou ${nome}, tenho ${idade} ano(s), moro em ${cidade} e não sou estudante.`)
    }  
}
imprimeMsg('Hayden', 1, 'São Paulo', false);
*/

/*
//5.a)
function soma (num1, num2){
    let resultado = Number(num1) + Number(num2)
    return resultado
}
console.log(soma(2, 5))
*/

/*
//b.
function maiorOuIgual (num1, num2){
    let resultado;
    if (Number(num1) >= Number(num2)){
            resultado = true
    } else {
        resultado = false
    }
    return resultado;
}
console.log(maiorOuIgual(5, 10))
*/

/*
//c.
function imprime10x (mensagem) {
    for (let i=0; i<10; i++){
        console.log (mensagem) 
    }
}
imprime10x("Oies!")
*/

/*
//6.a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function nElementos (arr){
    return arr.length
}
console.log(nElementos(array))
*/

/*
//b
function ePar (numero){
    let resultado
    if(numero % 2 === 0){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}
console.log(ePar(7))
*/

/*
//c
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function nPares (arr){
    let cont = 0;
    for (let i=0; i<arr.length; i++){
        if(Number(arr[i] % 2 == 0)){
            cont++
        }
    }
    return cont
}
console.log(nPares(array))
*/

/*
//d
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function ePar (numero){
    let resultado
    if(Number(numero) % 2 == 0){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}
function nPares (arr){
    let cont = 0;
    for (let i=0; i < arr.length; i++){
        if(ePar(arr[i])){
            cont++
        }
    }
    return cont
}
console.log(nPares(array))
*/

//DESAFIOS
/*
//1.a
let imprimeNumero = (numero) => {
    console.log(numero)
}
const print = imprimeNumero(2)
*/

/*
//b
let imprimeNumero = (numero) => {
    console.log(numero)
}

let soma = (num1, num2) => {
    let resultado = num1 + num2
    imprimeNumero(resultado)
}
soma(1, 2)
*/