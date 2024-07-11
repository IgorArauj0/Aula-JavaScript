function generatePDF() {
    const name = document.getElementById("name").value;
    const productId = document.getElementById("productId").value;
    const value = document.getElementById("value").value;
    const number = document.getElementById("number").value;


    const doc = new jsPDF();

    doc.text(`Nome: ${name}`, 10, 10);
    doc.text(`ID do Produto: ${productId}`, 10, 20);
    doc.text(`Valor: ${value}`, 10, 30);
    doc.text(`Número: ${number}`, 10, 40);

    doc.save('meu-produto.pdf');

};