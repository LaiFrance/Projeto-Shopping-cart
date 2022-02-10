// const { fetchItem } = require('./helpers/fetchItem');

// const buttonLimparCar = document.querySelector('.empty-cart');
// const listaCarrinho = document.querySelector('.cart__items');

//

// REQUISITO 3 COM REFERENCIA A https://qastack.com.br/programming/5933157/how-to-remove-an-html-element-using-
// Ao clicar no produto no carrinho de compra, ele deve ser removido

function cartItemClickListener(event) {
  event.target.parentNode.removeChild(event.target);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// REQUISITO 2
async function addCartItemElement(event) {
  const element = event.target.parentNode.firstChild.innerText; // texto com caracteristicas dos itens
  const idItem = await fetchItem(element);
  const { id, title, price } = idItem;
  const selectitem = document.querySelector('.cart__items');
  selectitem.appendChild(
    createCartItemElement({ sku: id, name: title, salePrice: price }),
  );
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
// requisito 2 adicionando função ao botão
function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  // section.appendChild(
  // createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),);
  // add botao função
  const botaoCarrinho = createCustomElement(
    // criando botao adicionar carrinho
    'button',
    'item__add',
    'Adicionar ao carrinho!',
  );
  botaoCarrinho.addEventListener('click', addCartItemElement); // linha 17 //evento click
  section.appendChild(botaoCarrinho);
  return section;
}

// REQUISITO 1
async function listadeProdutos() {
  const produto = await fetchProducts('computador');
  const selecionartitem = document.querySelector('.items');
  produto.results.forEach(({ id, title, thumbnail }) => {
    selecionartitem.appendChild(
      createProductItemElement({ sku: id, name: title, image: thumbnail }),
    );
  });
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// REQUISITO 6 LIMPAR CARRINHO DE COMPRAS // ESVAZIAR LISTA
const ol = document.querySelector('ol');
const pegarbotao = document.querySelector('.empty-cart'); // BOTAO ESVAZIAR CARRINHO O botão deve obrigatoriamente, ter a classe empty-cart.

function limparButton() {
  // função marcar lista e limpar ela
  ol.innerHTML = '';
}
pegarbotao.addEventListener('click', limparButton);

// REQUISITO 7 Adicione um texto de "carregando" durante uma requisição à API
function carregando() {
  const h1 = document.createElement('h1');
  h1.innerText = 'carregando...';
  h1.className = 'loading';
  document.querySelector('.items').appendChild(h1);
}
function removecarregando() {
  setTimeout(function () {
    const h1 = document.querySelector('h1');
    h1.remove();
    }, 2000);
}

window.onload = () => {
  carregando();
  removecarregando();
  listadeProdutos();
};