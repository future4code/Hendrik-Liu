let listaPosts = []

function criarPost () {
    const titulo = document.getElementById('titulo-post')
    const autor = document.getElementById('autor-post')
    const conteudo = document.getElementById('conteudo-post')    

    const post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }

    listaPosts.push(post)

    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
}

function mostrarPost () {
    const postBox = document.getElementById('container-de-posts')

    postBox.innerHTML += `<p>${listaPosts[0].titulo}</p>`
    postBox.innerHTML += `<p>${listaPosts[0].autor}</p>`
    postBox.innerHTML += `<p">${listaPosts[0].conteudo}</p>`
}