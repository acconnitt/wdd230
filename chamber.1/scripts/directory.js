// const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// fetch('https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json')
// .then((response) => response.json())
// .then((json) => console.log(json));


// const requestURL = $.getJSON('./data');
// $.getJSON('./data.json', function(data));
// const requestURL = requests.get('./data.json');
// import requestURL from './data.json';
// const requestURL = JSON.parse('./data.json')
// const requestURL = 'data.json';

const cards = document.querySelector('.cards');


// More robust way 
async function getProphets() {
    const response = await fetch(requestURL);
    //Convert to json 
    const jsonObject = await response.json();
    const prophets = jsonObject['prophets'];
    // console.log(prophets);
    console.table(jsonObject);
    prophets.forEach(displayProphets);
}



function displayProphets(prophet) {

    // Create elements to add to the document
    // Created a section, h2, h3, and image
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    // let p = document.createElement('p');
    let portrait = document.createElement('img');
    let birthLoc = document.createElement('p');
    let dob = document.createElement('p');
    let children = document.createElement('p');

    [birthLoc, dob, children].forEach((element) => {
        element.classList.add('caption');
    })

    // Change the textContent property of the h2 element to contain the prophet's full name
    // h2.textContent = prophet.name + ' ' + prophet.lastname;
    //same as bellow
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    h3.textContent = `Place of birth: ${prophet.birthplace}`
    birthLoc.textContent = `${"Place of Birth:"} ${prophet.birthplace}`
    dob.textContent = `${"Date of Birth:"} ${prophet.birthdate}`;
    children.textContent = `${"Number of Children:"} ${prophet.numofchildren}`;


    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    // // Add/append the section(card) with the h2 element
    // card.appendChild(h2);
    // card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    card.append(h2, dob, birthLoc, portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

getProphets();
