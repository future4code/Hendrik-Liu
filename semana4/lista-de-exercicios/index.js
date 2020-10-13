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
// O programa é um laço que percorre o array numeros e para cada elemento, faz uma comparação se o elemento é menor que o numero1 e outra comparação se o elemento é maior que o numero2. Resumundo: o numero1 guarda o menor número da lista e o numero2 o maior. 
//-10
//1590

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
//     if(a == b && b == c){
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

//     console.log(`A diferença entre eles é`, Math.abs(num1 - num2))
// }
// (exercicio5(5, 20))

//Exercícios de Funções
// 1
// const array = [10, 20, 30, 70, 40, 50, 100, 60, 90, 80]

// let primeiroMaior = -Infinity 
// let segundoMaior = -Infinity
// let primeiroMenor = Infinity
// let segundoMenor = Infinity

// function exercicio1 (array){
//     for(let i=0; i<array.length; i++){
//         if (array[i] > primeiroMaior){
//             segundoMaior = primeiroMaior
//             primeiroMaior = array[i]
//         } else if (array[i] > segundoMaior) {
//             segundoMaior = array[i]
//         }

//         if (array[i] < primeiroMenor){
//             segundoMenor = primeiroMenor
//             primeiroMenor = array[i]
//         } else if (array[i] < segundoMenor) {
//             segundoMenor = array[i]
//         }
//     }
//     console.log(segundoMaior)
//     console.log(segundoMenor)
// }
// console.log(exercicio1(array))

//2
// let exercicio2 = () => {
//     alert("Hello Future4")
// }

// exercicio2();


//Exercícios de Objetos
//1 
// Objetos são estruturas que permite representar dados complexos de forma organizada. Devemos usar essas  estruturas para armazenar dados e funcionalidades relacionadas.

//2
// function criaRetangulo (lado1, lado2) {
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * Number(lado1 + lado2),
//         area: Number(lado1) * Number(lado2)
//     }
//     return retangulo
// }
// console.log(criaRetangulo(5, 10))

//3
// function filmeFavorito () {
//     const filme = {
//         titulo: 'Três vezes amor',
//         ano: 2008,
//         diretor: 'Adam Brooks',
//         atores: ['Ryan Reynolds', 'Adam Ferrara', 'Isla Fisher', 'Rachel Weisz']
//     }
//     console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ` + filme.atores)
// }
// filmeFavorito()

//4
// const pessoa = {
//     nome: 'Rafael Nadal',
//     idade: 34,
//     email: 'rafaelnadal@rf.com',
//     endereco: 'Alguma rua na Espanha'
// }

// function anonimizarPessoa () {
//     const anonimo = {
//         ...pessoa,
//         nome: 'Anônimo'
//     }
//     console.log(anonimo)
// }
// anonimizarPessoa()

//Exercicios de Funções de Array
//1a
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const adultos = pessoas.filter((pessoa, index, array) => {
//     return pessoa.idade >= 20
// })
// console.log(adultos)

//b
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const criancasAdolescentes = pessoas.filter((pessoa, index, array) => {
//     return pessoa.idade < 20
// })
// console.log(criancasAdolescentes)

//2.a)
// const array = [1, 2, 3, 4, 5, 6]

// const multiplica2 = array.map ((numero) => {
//     return numero * 2
// })

// console.log(multiplica2)

//b
// const array = [1, 2, 3, 4, 5, 6]
// const multiplica3 = array.map ((numero) => {
//     return numero*3 
// }).map((numero) => {
//     return numero.toString()
// })

// console.log(multiplica3)

//c
// const array = [1, 2, 3, 4, 5, 6]
// const parImpar = array.map((numero) => {
//     if (numero % 2 == 0){
//         return `${numero} é par`
//     } else {
//         return `${numero} é ímpar`
//     }
// })

// console.log(parImpar)

//3.a
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const entradaOk = pessoas.filter((pessoa) => {
//     return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
// })

// console.log(entradaOk)

//b
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const entradaNaoOk = pessoas.filter((pessoa) => {
//     return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5)
// })

// console.log(entradaNaoOk)

//4
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const consultasNaoCanceladas = consultas.filter((consulta) => {
//     return !(consulta.cancelada)
// }).map((consulta) => {
//     if(consulta.genero === "masculino"){
//         return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//     }
//     else {
//         return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.` 
//     }
// })

// console.log(consultasNaoCanceladas)

// const consultasCanceladas = consultas.filter((consulta) => {
//     return (consulta.cancelada)
// }).map((consulta) => {
//     if(consulta.genero === "masculino"){
//         return `Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//     }
//     else {
//         return `Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//     }
// })

// console.log(consultasCanceladas)

//5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// let totalCompras = 0
// contas.forEach((conta) => {
//     for (let compra of conta.compras) {
//         totalCompras += compra
//     }
//     conta.saldoTotal -= totalCompras
// })

// console.log(contas)
