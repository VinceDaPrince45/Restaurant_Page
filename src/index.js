import './style.css';
import addHome from './home.js';
import addMenu from './menu.js';
import addContact from './contact';

const content = document.querySelector('#content');

addHome();
const home = document.querySelector('.home');
home.onclick = () => {
    content.textContent = '';
    addHome();
}
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');


console.log('hi');