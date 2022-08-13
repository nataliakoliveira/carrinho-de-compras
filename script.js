const items = document.querySelector('.items');
const buttonAdd = document.querySelectorAll('.item__add');
const cartItems = document.querySelector('.cart__items');
const EmptyButton = document.querySelector('.empty-cart');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};
const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCarrinho = async (itemEscolhido) => {
  const { id, title, price } = await fetchItem(itemEscolhido);
  const itemData = createCartItemElement({ sku: id, name: title, salePrice: price });
  cartItems.appendChild(itemData);
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  const buttonAddCart = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(buttonAddCart);
  buttonAddCart.addEventListener('click', () => {
    addCarrinho(sku);
  });
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const listagemProdutos = async () => {
  const { results } = await fetchProducts('computador');
  const h1 = document.querySelector('.loading');
  h1.remove();
  results.forEach((item) => {
    const { id, title, thumbnail } = item;
    const a = createProductItemElement({ sku: id, name: title, image: thumbnail });
    items.appendChild(a);
  });
};

EmptyButton.addEventListener('click', () => {
 cartItems.innerHTML = '';
});

window.onload = async () => { await listagemProdutos(); };
