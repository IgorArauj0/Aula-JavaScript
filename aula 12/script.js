let meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
    meuElemento.classList.add("circle");
    meuElemento.classList.remove("square");
}

function tornarQuadrado() {
    meuElemento.classList.add("square");
    meuElemento.classList.remove("circle");
}

function altenarFormato() {
    meuElemento.classList.toggle("circle");
    //Toggle trabalha em estado real, ou seja ele observa o formato do elemento e faz a alternância de acordo com as atribuições que colocamos
    meuElemento.classList.toggle("square");
}