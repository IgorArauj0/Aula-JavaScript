const botao = document.querySelector("button");

const cores = document.querySelector('select');

function mudarCor() {
    botao.style.backgroundColor = cores.value;
}