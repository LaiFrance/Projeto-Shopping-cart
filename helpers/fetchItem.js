const fetchItem = async (item) => { // informações da internet por isso assincrona await espera que infor seja resolvida para trazer a info//função nativa do java 
  const url = `https://api.mercadolibre.com/items/${item}`;
  try {
    const response = await fetch(url);
    const produto = await response.json(); // dados json é uma função assincrona e retorna uma promissed(dado)
    return produto;
   } catch (error) {
     return error;
  }
};
console.log(fetchItem('MLB1341706310'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
