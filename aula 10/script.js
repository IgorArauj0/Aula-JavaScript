//getAttribute - Obter o valor do atributo (valor da linha)

//setAttribute - definir ou modificar o valor

function changeImage() {
   const img = document.getElementById('myImage'); //Aqui conseguimos armazenar o conteúdo da imagem

   const currentSrc = img.getAttribute("src"); //Aqui pegamos o atributo src da imagem para trabalhar a troca da mesma.

   if (currentSrc === 'xampp.png') {
      //Se a origem atual da imagem for igual a 'xampp.png' execute algo.

      img.setAttribute("src", "github.webp") //usando o SetAttribute vamos modificar o valor dela, através do src e especificando a outra img.

      img.setAttribute("alt", "Imagem Github");

   } else { //Caso contrário faça o processo inverso
      img.setAttribute("src", "xampp.png");
      img.setAttribute("alt", "Imagem Xampp");

   };

}

function changeType() {
   const input = document.getElementsByTagName("input")[0]; //Indice 0, primeiro elemento da lista de Input, que são vários.
   const currentType = input.getAttribute("type");

   switch (currentType) {
      case 'text':
         input.setAttribute('type', 'number');
         break;

      case "number":
         input.setAttribute('type', 'radio');
         break;

      case "radio":
         input.setAttribute("type", "range");
         break;

      default:
         input.setAttribute("type", "text");
       
   }


}







