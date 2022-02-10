const saveCartItems = (lista) => {
 const salvar = localStorage.setItem('cartItems', lista);
 return salvar;
};
 // deve salvar os itens do carrinho de compras no localStorage, em uma chave denominada cartItems.
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
