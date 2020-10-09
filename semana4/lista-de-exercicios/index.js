//Exercícios de interpretação de código
//1
// Na função conversorDeMoeda recebe um parâmetro valorEmDolar:
//     A variável cotacao recebe um valor digitado pelo usuário e;
//     A função retorna o valor de valorEmDolar multiplicado pelo valor da variável cotação.
// Imprime 100 multiplicado pelo valor da variável cotacao.

//2
// A função investeDinheiro recebe o parâmetro tipoDeInvestimento e valor.
//     A função lê a variável tipoDeInvestimento e:
//         Caso seja "Poupança", valorAposInvestimento recebe o valor da variável valor multiplicado por 1.03;
//         Caso seja "Renda Fix", valorAposInvestimento recebe o valor da variável valor multiplicado por 1.05;
//         Caso seja "CDB", valorAposInvestimento recebe o valor da variável valor multiplicado por 1.06;
//         Caso seja "Ações", valorAposInvestimento recebe o valor da variável valor multiplicado por 1.1;
//         Caso não seja nenhuma das opções acima, ele envia a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO"
//     A função retorna o valor da variável valorAposInvestimento.

// Imprime 165
// Imprime TIPO DE INVESTIMENTO INFORMADO INCORRET0

//3
// O laço percorre o array numeros e para cada elemento do array, ele verifica se o elemento é par (ou seja, resto igual a 0) e caso seja, adiciona o elemento ao array1. Caso não seja, adiciona o elemento ao array2.
// Imprime: Quantidade total de números 14
// Imprime: 6
// Imprime: 8

//4
// O programa é um laço que percorre o array numeros e para cada elemento, faz uma comparação se o elemento é menor que o numero1 e outra comparação se o elemento é maior que o numero2. 

//Exercícios de Lógica de Programação
//1
//for, for of e while
// const numeros = [5, 10, 15, 20]

// for (let i=0; i < numeros.length; i++){
//     console.log(`No índice ${i}, o número é ${numeros[i]}`)    
// }

// for (let elemento of numeros){
//     console.log(`Imprime elemento: ${elemento}`)
// }

// let cont=5;
// let i=0;
// while (i < cont){
//     console.log(`Imprime ${i}`)
//     i++
// }
    
// 2
// const booleano1 = true
// const booleano2 = false
// const booleano3 = true //!booleano2
// const booleano4 = false //!booleano3

// a) `booleano1 && booleano2 && !booleano4`
//     true && false && true == false
// b) `(booleano1 && booleano2) || !booleano3`
//     (true && false) || false == false
// c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`
//     ( false || true ) && (false || true) == true 
// d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`
//     (true && false) || (false && false) == false
// e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`
//     false && false || (true && true && true) == true

//3
// O código não funciona porque faltou adicionar o incremento no final do código e a quantidade deve ser menor que i ao invés de menor e igual.

// const quantidadeDeNumerosPares = 5;
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

//4
// function exercicio4 (a, b, c){
//     if(a == b && b==c){
//         return 'Equilátero'
//     } else if (a == b || b == c || a == c){
//         return 'Isósceles'
//     } else {
//         return 'Escaleno'
//     }
// }
// console.log(exercicio4(1, 2, 3))

//5
// function exercicio5 (num1, num2){
//     if (num1 > num2){
//         console.log(`O maior é ${num1}`)
//     } else {
//         console.log(`O maior é ${num2}`)
//     }
    
//     if (num1 % num2 == 0){
//         console.log(`O ${num1} é divisível por ${num2}`)
//     } else {
//         console.log(`O ${num1} não é divisível por ${num2}`)
//     }

//     if (num2 % num1 == 0){
//         console.log(`O ${num2} é divisível por ${num1}`)
//     } else {
//         console.log(`O ${num2} não é divisível por ${num1}`)
//     }

//     if (num1 > num2){
//         console.log(`A diferença entre eles é`, num1-num2)
//     } else {
//         console.log(`A diferença entre eles é`, num2-num1)
//     }
// }
// console.log(exercicio5(5, 20))

//Exercícios de Funções
//1
const array = [10, 20, 30, 40, 50, 100]

let max = array[0]
let max2 = array[0]

function exercicio1 (array){
    for(let i=0; i<array.length; i++){
        if (max < array[i]){
            max = array[i]
        } 
    
        if ( max2 < array[i] && max2 < max){
            max2 = array[i]
        }
    }
    return max2
}
console.log(exercicio1(array))



