import './style.css';
import {createHeader, createTabs, createMain} from './initLoad';

document.body.appendChild(createHeader());
document.body.appendChild(createTabs().pageTabs);
document.body.appendChild(createMain());

document.querySelector('.homeBtn').addEventListener('click', openTab);
document.querySelector('.menuBtn').addEventListener('click', openTab);
document.querySelector('.contactBtn').addEventListener('click', openTab);

function openTab() {
  let tabs = document.getElementsByClassName('tabBtn');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace("active", "");
  }
  this.classList.add('active');
}