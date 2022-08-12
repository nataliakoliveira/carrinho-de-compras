const fetchItem = async (id) => {
  const resposta = await fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json()).then((data) => data)
    .catch((error) => error);
  return resposta;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
