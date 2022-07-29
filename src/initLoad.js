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
  homeBtn.classList.add('tabBtn', 'homeBtn', 'active');
  homeBtn.textContent = "Home";

  let menuBtn = document.createElement('button');
  menuBtn.classList.add('tabBtn', 'menuBtn');
  menuBtn.textContent = "Menu";

  let contactBtn = document.createElement('button');
  contactBtn.classList.add('tabBtn', 'contactBtn');
  contactBtn.textContent = "Contact";

  pageTabs.appendChild(homeBtn);
  pageTabs.appendChild(menuBtn);
  pageTabs.appendChild(contactBtn);

  return {pageTabs, homeBtn, menuBtn, contactBtn};
}

function createMain() {
  let pageContent = document.createElement('main');

  return pageContent;
}

export {
  createHeader,
  createTabs,
  createMain
};