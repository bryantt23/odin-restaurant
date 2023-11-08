function component() {
  const content = document.querySelector('.main');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact Us';

  const p = document.createElement('p');
  p.textContent = 'https://parisjetaime.com/eng/contact';

  const img = document.createElement('img');
  img.src = '../src/contactUs.svg';
  content.appendChild(h1);
  content.appendChild(p);
  content.appendChild(img);
}

export default component;
