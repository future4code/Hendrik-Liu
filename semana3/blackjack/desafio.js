let player1 = []
let player2 = []

console.log("Bem vindo ao jogo de Blackjack!")
//Inicia rodada
if (confirm("Quer iniciar uma nova rodada?")){
   //Compra cartas
   let p1C1 = comprarCarta()
   let p1C2 = comprarCarta()
   let p2C1 = comprarCarta()
   let p2C2 = comprarCarta()

   //Verifica cartas Às
   if (p1C1.valor != 11 && p1C2.valor != 11){
      player2.push(p1C1)
      player2.push(p1C2)
   } else {
      p1C1 = comprarCarta()
      p1C2 = comprarCarta()
      player1.push(p1C1)
      player1.push(p1C2)   
   } 
   
   if (p2C1.valor != 11 && p2C2.valor != 11){
      player2.push(p1C1)
      player2.push(p1C2)
   } else {
      p2C1 = comprarCarta()
      p2C2 = comprarCarta()
      player2.push(p1C1)
      player2.push(p1C2)
   } 
}