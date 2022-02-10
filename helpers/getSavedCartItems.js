const getSavedCartItems = () => {
  // recuperar os itens do carrinho de compras do localStorage quando carregamos a página.
const info = localStorage.getItem('cartItems');
return info;
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}