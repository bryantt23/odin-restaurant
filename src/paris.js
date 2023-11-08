function component() {
  const content = document.querySelector('.main');
  const h1 = document.createElement('h1');
  h1.textContent = 'Paris food';

  const p = document.createElement('p');
  p.textContent = 'Trey tasty';

  const img = document.createElement('img');
  img.src = '../src/eiffel.jpg';
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(img);
}

export default component;
