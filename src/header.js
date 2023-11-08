import contact from './contact';
import menu from './menu';
import paris from './paris';

function component() {
  const content = document.querySelector('#content');

  // Create the unordered list
  const ul = document.createElement('ul');

  // Define the mapping of text content to module functions
  const moduleMapping = {
    Home: paris,
    Menu: menu,
    Contact: contact
  };

  function createListItem(text) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = text;
    a.href = '#';
    li.appendChild(a);
    return li;
  }

  // Append the list items to the unordered list
  ul.appendChild(createListItem('Home'));
  ul.appendChild(createListItem('Menu'));
  ul.appendChild(createListItem('Contact'));

  // Append the unordered list to the content
  content.appendChild(ul);

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main');
  content.appendChild(mainDiv);

  ul.addEventListener('click', e => {
    if (e.target && e.target.nodeName === 'A') {
      e.preventDefault();
      mainDiv.innerHTML = '';
      const moduleName = e.target.textContent;
      const moduleFunction = moduleMapping[moduleName];
      if (moduleFunction) {
        moduleFunction();
      }
    }
  });

  paris();
}

export default component;
