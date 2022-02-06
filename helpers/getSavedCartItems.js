const getSavedCartItems = () => {
  const data = localStorage.getItem('cartItems');
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
