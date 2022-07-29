import './style.css';
import {createHeader, createTabs, createMain} from './initLoad';

document.body.appendChild(createHeader());
document.body.appendChild(createTabs().pageTabs);
document.body.appendChild(createMain());