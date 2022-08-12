const fetchProducts = async (item) => {
  const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return resposta;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}