// eslint-disable-next-line max-lines-per-function
const appendComputador = (id, title, uriImagem) => {
  const sectionPai = document.querySelector('.items');

  const sectionFilha = document.createElement('section');
  const spanId = document.createElement('span');
  const spanTitle = document.createElement('span');
  const img = document.createElement('img');
  const button = document.createElement('button');

  spanId.innerText = id;
  spanId.classList.add('item__sku');
  spanTitle.innerHTML = title;
  spanTitle.classList.add('item__title');
  img.src = uriImagem;
  img.classList.add('item__image');
  button.innerText = 'Adicionar ao carrinho';
  button.classList.add('item__add');
  sectionFilha.classList.add('item');

  sectionFilha.appendChild(spanId);
  sectionFilha.appendChild(spanTitle);
  sectionFilha.appendChild(img);
  sectionFilha.appendChild(button);

  sectionPai.appendChild(sectionFilha);
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 1
function adicionarInfos() {
  // const itemSection = document.querySelector('.items');
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => response.json()
    .then((response2) => console.log(response2.results))
    .then((computadores) => computadores.results.forEach((computador) => appendComputador(computador.id, computador.title, computador.thumbnail))));

    // .then((response) => {
    //   response.results.forEach((elemento) => {
    //     const informacoes = { sku: elemento.id, name: elemento.title, image: elemento.thumbnail };
    //     itemSection.appendChild(createProductItemElement(informacoes));
    //   });
}
adicionarInfos();

// const buttonAdd = document.querySelector('item__add');
// buttonAdd.addEventListener('click', (event) => {
//   const sect = event.target.parentElement;
//   // fetch(`https://api.mercadolibre.com/items/$ItemID
//   // `)
// });
// window.onload = () => { };
