function component() {
  const content = document.querySelector('.main');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  const p = document.createElement('p');
  p.textContent = 'Tasty food';

  const img = document.createElement('img');
  img.src = '../src/menu.png';
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(img);
}

export default component;
