import './style.css';
import {createHeader, createTabs, createMain} from './initLoad';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';

document.body.appendChild(createHeader());
document.body.appendChild(createTabs());
document.body.appendChild(createMain());

let homeBtn = document.querySelector('.homeBtn');
let menuBtn = document.querySelector('.menuBtn');
let contactBtn = document.querySelector('.contactBtn');

homeBtn.addEventListener('click', openTab);
homeBtn.addEventListener('click', loadHome);
homeBtn.click();

menuBtn.addEventListener('click', openTab);
menuBtn.addEventListener('click', loadMenu);

contactBtn.addEventListener('click', openTab);
contactBtn.addEventListener('click', loadContact);

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