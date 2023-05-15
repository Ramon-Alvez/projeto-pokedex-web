const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const footer = document.querySelector("footer");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if(modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sun.png");
    } else {

    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/img/moon.png");
    }
});
