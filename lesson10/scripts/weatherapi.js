const current_temperature = document.querySelector('#current-temp');
const current_condition = document.querySelector('#current-condition');
const weather_icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');


//Get the weather from the API - openweathermap.org
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Titusville&units=imperial&APPID=9ee999a3db2fc0bb4f0d772b6ae884ed';


// Fetch api
async function apiFetch() {
    try {
        // Try this if is ok
        const response = await fetch(apiURL);
        if (response.ok) {
            // move the data to here in a json format
            const data = await response.json();
            // show data in console
            console.log(data);
            displayResults(data);

        } else {
            console.log(`Response not OK ${await response.text()}`);
        }

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

apiFetch()

//Capitalize 
function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Diplay results
function displayResults(data) {
    current_temperature.textContent = data.main.temp.toFixed(0);
    let current_condition_capitalize = capitalize(data.weather[0].description); 
    current_condition.textContent = current_condition_capitalize;
    caption.textContent = `The current condition in Titusville is "${current_condition_capitalize}"`;
    const icons_src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icons_src);
    const icons_alt = `Icon of current weather condition at Titusville which is ${current_condition_capitalize}`;
    weather_icon.setAttribute('alt', icons_alt);
}

//ANOTHER SOLUTION
// function  displayResults(data) {
//     current_temperature.innerHTML = `${data.main.temp.toFixed(0)}`;
  
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     const current_condition = data.weather[0].description;
    
//     weather_icon.setAttribute('src', iconsrc);
//     weather_icon.setAttribute('alt', current_condition);
    
//     caption.textContent = current_condition;
//   }