export default function addContact() {
    let content = document.querySelector('#content');

    // body
    let body = document.createElement('div');
    body.classList.add('body');

    let container = document.createElement('div');
    container.classList.add('container');

    // sections within container
    const contactTitle = document.createElement('div');
    contactTitle.textContent = 'Contact List';

    const contactOne = document.createElement('div');
    const contactOnePerson = document.createElement('div');
    contactOnePerson.textContent = 'Vincent';
    const contactOneDescription = document.createElement('div');
    contactOneDescription.textContent = 'Owner and head chef: 111-111-1111';
    contactOne.append(contactOnePerson,contactOneDescription);

    const contactTwo = document.createElement('div');
    const contactTwoPerson = document.createElement('div');
    contactTwoPerson.textContent = 'Brent';
    const contactTwoDescription = document.createElement('div');
    contactTwoDescription.textContent = 'Sous chef: 111-111-1111';
    contactTwo.append(contactTwoPerson,contactTwoDescription);

    const contactThree = document.createElement('div');
    const contactThreePerson = document.createElement('div');
    contactThreePerson.textContent = 'Salman';
    const contactThreeDescription = document.createElement('div');
    contactThreeDescription.textContent = 'Manager: 111-111-1111';
    contactThree.append(contactThreePerson,contactThreeDescription);

    container.append(contactTitle,contactOne,contactTwo,contactThree);
    body.append(container);

    content.append(body);
}