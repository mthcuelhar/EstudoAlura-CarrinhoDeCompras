let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    // Recuperar nome do produto e quantidade
    let produto = document.getElementById('produto').value;
    let quantidadeProduto = document.getElementById('quantidade').value;

    // Trava de seguranca para quantidade
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0){
        alert("Insira uma quantidade valida.");
        document.getElementById('quantidade').value = 0;
        return;
    }

    // Recuperar e separar valor e nome
    let valorUnitarioProduto = produto.split('R$')[1];
    let nomeProduto = produto.split('-')[0];
    // Calcular o preco, o nosso subtotal
    let valorSomaProduto = valorUnitarioProduto * quantidadeProduto;
    // Adicionar produto no carrinho
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorSomaProduto}</span>
  </section>`;
    // Atualizar o valor total
    totalCarrinho = totalCarrinho + valorSomaProduto;
    let valorTotalCarrinho = document.getElementById('valor-total');
    valorTotalCarrinho.textContent = `R$ ${totalCarrinho}`;
    document.getElementById('quantidade').value = 0;
}
    
function limpar(){
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

