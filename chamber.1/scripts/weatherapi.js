const current_temperature = document.querySelector('#current-temp');
const current_condition = document.querySelector('#current-condition');
const weather_icon = document.querySelector('#weather-icon');
const wind_speed = document.querySelector('#wind-speed');
const wind_chill = document.querySelector('#feels-like');


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


//Feels like temperature calculation
function windChill(current_temperature, wind_speed){

    //Wind chill formula
    let windChillCalculator = 35.74 + 0.6215 * current_temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * current_temperature *  Math.pow(wind_speed, 0.16);
    console.log(windChillCalculator);

    //Round down result to close interger
    windChillCalculator = Math.floor(windChillCalculator);

    // Check if wind chill is greater than temperature, return temp
    windChillCalculator = (windChillCalculator > current_temperature) ? current_temperature : windChillCalculator;

    // Display the windChillCalulator result
    console.log(windChillCalculator);

    //Return result
    return windChillCalculator;
}


//Capitalize 
function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}


// Diplay results
function displayResults(data) {
    current_temperature.textContent = data.main.temp.toFixed(0);
    let current_condition_capitalize = capitalize(data.weather[0].description); 
    current_condition.textContent = current_condition_capitalize;

    wind_speed.textContent = data.wind.speed;

    wind_chill.textContent= windChill(data.main.temp, data.wind.speed);
    // wind_chill.innerHTML= windChill(data.main.temp, data.wind.speed);
    
    const icons_src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weather_icon.setAttribute('src', icons_src);
    const icons_alt = `Icon of current weather condition at Titusville which is ${current_condition_capitalize}`;
    weather_icon.setAttribute('alt', icons_alt);
    
}
