const fetchProducts = async (item) => {
  try {
    const resposta = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const { results } = await resposta.json();
    return results;
  } catch (error) {
    throw new Error('');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}