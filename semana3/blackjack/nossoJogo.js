
console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")){
   //Inicia nova rodada

   //Compra as cartas
   const player1C1 = comprarCarta()
   const player1C2 = comprarCarta()
   const player2C1 = comprarCarta()
   const player2C2 = comprarCarta()

   //Imprime as cartas e as pontuações
   console.log("Usuário - cartas: " + player1C1.texto + " " + player1C2.texto + " pontuação " + (player1C1.valor + player1C2.valor))
   console.log("Usuário - cartas: " + player2C1.texto + " " + player2C2.texto + " pontuação " + (player2C1.valor + player2C2.valor))

   //Resultados do jogo
   if ((player1C1.valor + player1C2.valor) > (player2C1.valor + player2C2.valor)){
      console.log("O usuário ganhou!")
   } else if ((player1C1.valor + player1C2.valor) < (player2C1.valor + player2C2.valor)){
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }
} else {
   console.log('O jogo acabou')
}