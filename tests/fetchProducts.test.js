require("../mocks/fetchSimulator");
const { fetchProducts } = require("../helpers/fetchProducts");
const computadorSearch = require("../mocks/search");
//referencia https://jestjs.io/pt-BR/docs/asynchronous
describe("1 - Teste a função fecthProducts", () => {
  test("se fetchProducts é uma função", async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  //Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;
  test("se fetch foi chamada", async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  //Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador";
  test('se, ao chamar a função fetchProducts com o argumento computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith(
      "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    );
  });
  //Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
  test('se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const resp = await fetchProducts('computador');
    expect(resp).toEqual(computadorSearch);
  });
  //Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error('mensagem esperada aqui') para comparar com o objeto retornado da API.
  test('se, a função fetchProducts sem argumetos retorna um erro com a mensagem: You must provide an url', async () => {
    const semparam = await fetchProducts();
    expect(semparam).toEqual(new Error('You must provide an url'));
  });
});
