const fetchProducts = async (value) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${value}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
