import porkBelly from './air-fried-pork-belly-sliced.jpg';
import friedRice from './easy_fried_rice-1.jpg';
import cornMilk from './Creamy-Blended-Corn-Drink-1500x2000.jpg';

export default function addMenu() {
    let content = document.querySelector('#content');

    // header
    let header = document.createElement('div');
    header.classList.add('header');

    // tabs within header
    let tabs = document.createElement('div');
    tabs.classList.add('tabs');

    let home = document.createElement('button');
    home.textContent = 'Home';
    home.classList.add('home');
    let menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.classList.add('menu');
    menu.classList.add('active');
    let contact = document.createElement('button');
    contact.textContent = 'Contact';
    contact.classList.add('contact');

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    header.appendChild(tabs);

    // body
    let body = document.createElement('div');
    body.classList.add('body');

    let container = document.createElement('div');
    container.classList.add('container');

    // sections within container
    const menu_title = document.createElement('div');
    menu_title.classList.add('title');
    menu_title.textContent = 'Menu';

    const menu_description = document.createElement('div');
    menu_description.classList.add('description');
    menu_description.textContent = 'Here, the most well known dishes of the chef are known.';

    const itemOne = document.createElement('div');
    const itemOneImage = document.createElement('img');
    itemOneImage.src = friedRice;
    const itemOneDescription = document.createElement('div');
    itemOneDescription.textContent = 'Fried Rice: $10';
    itemOne.append(itemOneImage,itemOneDescription);

    const itemTwo = document.createElement('div');
    const itemTwoImage = document.createElement('img');
    itemTwoImage.src = porkBelly;
    const itemTwoDescription = document.createElement('div');
    itemTwoDescription.textContent = 'Crispy Pork Belly: $10';
    itemTwo.append(itemTwoImage,itemTwoDescription);

    const itemThree = document.createElement('div');
    const itemThreeImage = document.createElement('img');
    itemThreeImage.src = cornMilk;
    const itemThreeDescription = document.createElement('div');
    itemThreeDescription.textContent = 'Corn Milk: $3';
    itemThree.append(itemThreeImage,itemThreeDescription);

    container.append(menu_title,menu_description,itemOne,itemTwo,itemThree);
    body.appendChild(container);

    content.append(header,body);
}