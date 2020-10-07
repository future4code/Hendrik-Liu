function criarTarefa (){
    const novaTarefa = document.getElementById("tarefa").value
    if(novaTarefa != ""){
        const diaSemana = document.getElementById("dias-semana").value
        const diaSelecionado = document.getElementById(diaSemana)
        diaSelecionado.innerHTML += `<li>${novaTarefa}</li>`
        novaTarefa.value = ""
    } else {
        alert('Tarefa inválida.')
    }
}
