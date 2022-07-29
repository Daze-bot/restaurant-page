import './style.css';

function createHeader() {
  let pageHeader = document.createElement('header');

  let h1 = document.createElement('h1');
  h1.textContent = "Blue Sage";
  pageHeader.appendChild(h1);

  let text = document.createElement('p');
  text.textContent = "VEGETARIAN GRILLE";
  pageHeader.appendChild(text);

  return pageHeader;
}

function createTabs() {
  let pageTabs = document.createElement('div');
  pageTabs.classList.add('pageTabs');

  let homeBtn = document.createElement('button');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = "Home";

  let menuBtn = document.createElement('button');
  menuBtn.classList.add('menuBtn');
  menuBtn.textContent = "Menu";

  let contactBtn = document.createElement('button');
  contactBtn.classList.add('contactBtn');
  contactBtn.textContent = "Contact";

  pageTabs.appendChild(homeBtn);
  pageTabs.appendChild(menuBtn);
  pageTabs.appendChild(contactBtn);

  return pageTabs;
}

let pageContent = document.createElement('main');

document.body.appendChild(createHeader());
document.body.appendChild(createTabs());
document.body.appendChild(pageContent);