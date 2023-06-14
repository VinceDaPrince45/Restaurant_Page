import './style.css';
import addHome from './home.js';
import addMenu from './menu.js';
import addContact from './contact';

const content = document.querySelector('#content');

// header
let header = document.createElement('div');
header.classList.add('header');

// tabs within header
let tabs = document.createElement('div');
tabs.classList.add('tabs');

let home = document.createElement('button');
home.textContent = 'Home';
home.classList.add('home');
home.classList.add('active');
let menu = document.createElement('button');
menu.textContent = 'Menu';
menu.classList.add('menu');
let contact = document.createElement('button');
contact.textContent = 'Contact';
contact.classList.add('contact');

tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);

header.appendChild(tabs);
content.append(header);

// add content depending on tab

// function to determine active tab
function removeTabClass() {
    home.classList.remove('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
};

addHome();
home = document.querySelector('.home');
home.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    removeTabClass();
    home.classList.add('active');
    addHome();
});

menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    removeTabClass();
    menu.classList.add('active');
    addMenu();
});

contact = document.querySelector('.contact');
contact.addEventListener('click', () => {
    content.removeChild(content.lastChild);
    removeTabClass();
    contact.classList.add('active');
    addContact();
});