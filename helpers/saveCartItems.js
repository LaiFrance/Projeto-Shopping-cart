const saveCartItems = (elemento) => localStorage.setItem('cartItems', elemento);
 
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
