/*
OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que:
  - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação em cima dele.
  - Retirar a classe selecionado do personagem que não está selecionado.
  */

/* const homemDeFerro = document.getElementById("homem-de-ferro")

homemDeFerro.addEventListener("mouseenter", () => {
    homemDeFerro.classList.add("selecionado")
}) exemplo unitario codigo repetido */

const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => { 
    personagem.addEventListener("mouseenter", () => {
        const idSelecionado = personagem.attributes.id.value

        if(idSelecionado === "ultron") return

        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")

        /* 
OBJETIVO 2 - Quando passar o mouse em cima do personagem da listagem temos que trocar a imagem e o nome do personagem grande
  - Alterar imagem do jogador 1.
  - Alterar o nome do personagem selecionado.
*/
        const imagemJogador1 = document.getElementById("personagem-jogador-1")
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById("nome-jogador-1")
        const nomeSelecionado = personagem.getAttribute("data-name")
        nomeJogador1.innerHTML = nomeSelecionado

    })
})