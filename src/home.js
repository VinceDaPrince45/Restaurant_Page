export default function addHome() {

    let content = document.querySelector('#content');

    // body
    let body = document.createElement('div');
    body.classList.add('body');

    let container = document.createElement('div');
    container.classList.add('container');

    // sections within container

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Vincent's cookery";

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = "Home to food of many cultures. As a college student, these foods may be hit or miss depending on the time of day and effort level of the chef, but this level of unpredictability is what is so charming about this restaurant. Here, you'll never know how the food will taste. Expect excitement, or disgust."

    const time = document.createElement('div');
    time.classList.add('time');
    const timetitle = document.createElement('div');
    timetitle.textContent = 'Hours';
    const hoursOne = document.createElement('div');
    hoursOne.textContent = 'Sunday: Closed';
    const hoursTwo = document.createElement('div');
    hoursTwo.textContent = 'Monday: 12pm - 5pm';
    const hoursThree = document.createElement('div');
    hoursThree.textContent = 'Tuesday: 12pm - 5pm';
    const hoursFour = document.createElement('div');
    hoursFour.textContent = 'Wednesday: 12pm - 5pm';
    const hoursFive = document.createElement('div');
    hoursFive.textContent = 'Thursday: 12pm - 5pm';
    const hoursSix = document.createElement('div');
    hoursSix.textContent = 'Friday: 10pm - 12am';
    const hoursSeven = document.createElement('div');
    hoursSeven.textContent = 'Saturday: Closed';

    time.append(timetitle,hoursOne,hoursTwo,hoursThree,hoursFour,hoursFive,hoursSix,hoursSeven);

    const location = document.createElement('div');
    location.textContent = 'Location: under the bridge';

    container.append(title,description,time,location);
    body.appendChild(container);

    content.append(body);
}