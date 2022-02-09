const fetchProducts = async (value) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${value}`;

    const response = await fetch(url);
    const produto = await response.json();
    return produto;
  } catch (error) {
    return error;
  }
};
 console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
