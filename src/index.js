import './style.css';
import {createHeader, createTabs, createMain} from './initLoad';
import {loadHome} from './home';

document.body.appendChild(createHeader());
document.body.appendChild(createTabs().pageTabs);
document.body.appendChild(createMain());

let homeBtn = document.querySelector('.homeBtn');
let menuBtn = document.querySelector('.menuBtn');
let contactBtn = document.querySelector('.contactBtn');

homeBtn.addEventListener('click', openTab);
homeBtn.addEventListener('click', loadHome);
homeBtn.click();

menuBtn.addEventListener('click', openTab);

contactBtn.addEventListener('click', openTab);

function openTab() {
  let tabs = document.getElementsByClassName('tabBtn');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", "");
  }
  this.classList.add('active');

  let main = document.querySelector('main');
  while (main.hasChildNodes()) {
    main.removeChild(main.lastChild);
  }
}