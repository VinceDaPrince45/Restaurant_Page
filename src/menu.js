export default function addMenu() {
    let content = document.querySelector('#content');

    // header
    let header = document.createElement('div');
    header.classList.add('header');

    // tabs within header
    let tabs = document.createElement('div');
    tabs.classList.add('tabs');

    let home = document.createElement('div');
    home.textContent = 'Home';
    home.classList.add('home');
    let menu = document.createElement('div');
    menu.textContent = 'Menu';
    menu.classList.add('menu');
    menu.classList.add('active');
    let contact = document.createElement('div');
    contact.textContent = 'Contact';
    contact.classList.add('contact');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    header.appendChild(tabs);
}