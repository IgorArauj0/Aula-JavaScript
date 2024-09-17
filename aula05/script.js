//getAttribute - obter o valor do atributo (valor da linha)

//setAtttibute - definir ou modificar o valor 


function changeImage() {
    const img = document.getElementById("myImage"); //Aqui conseguimos armazenar o conteúdo da imagem
    
    const currentSrc = img.getAttribute("src"); //Aqui pegamos o atributo SRC da imagem (current basicamente ele diz o caminho de origem atual)


    if (currentSrc === "imagem1.svg") { //Se a origem atual da imagem for igual a "imagem1.svg"
        img.setAttribute("src", "imagem2.png"); //Usando o SetAttibute vamos modificar o valor dela, através do src e especificando a outra img.
        img.setAttribute("alt", "Imagem Github Desktop");
    } else { //Se não fazer o processo inverso basicamente.
        img.setAttribute("src", "imagem1.svg");
        img.setAttribute("alt", "Imagem GitHub.com");
    }
}





function changeType() {
    const input = document.getElementsByTagName("input")[0]; //indice 0, primeiro elemento da lista de Input, que são vários.
    const currentType = input.getAttribute("type");


    switch (currentType) {
        case 'text':
            input.setAttribute('type', 'number');
            break;

        case "number":
            input.setAttribute('type', 'radio');
            break

        case 'radio':
            input.setAttribute('type', 'range');
            break;
        default:
            input.setAttribute('type', 'text');
    }
}