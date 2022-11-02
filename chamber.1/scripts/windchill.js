let temp = 50;
// Displaying temp on screen from html
document.getElementById("temp").innerHTML = temp;

let windSpeed = 30;
// Displaying windSpeed on screen from html
document.getElementById("windSpeed").innerHTML = windSpeed; 


// HTML element where calculation will be store
let feelsLike = document.getElementById("feelsLike");
//Calling function 
feelsLike.innerHTML = windChill(temp, windSpeed);


//Feels like temperature calculation
function windChill(temp, windSpeed){

    // let feelsLike = document.getElementById("feelsLike");

    //Wind chill formula
    let windChillCalculator = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp *  Math.pow(windSpeed, 0.16);
    console.log(windChillCalculator);

    //Round down result to close interger
    windChillCalculator = Math.floor(windChillCalculator);

    // Check if wind chill is greater than temperature, return temp
    windChillCalculator = (windChillCalculator > temp) ? temp : windChillCalculator;

    // Display the windChillCalulator result
    console.log(windChillCalculator);

    //Return result
    return windChillCalculator;
}