const fetchItem = async (id) => {
  try {
    const resposta = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const { results } = await resposta.json();
    return results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
