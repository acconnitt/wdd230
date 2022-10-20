// OPEN AND CLOSE MENU 
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x=document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;





// DATE FOR FOOTER
// Select the HTML element to manipulate
const year1 = document.querySelector("#year1")
const date1 = document.querySelector("#date1");
// Try to complete the method with options
try {
    const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };

    year1.innerHTML = `Today is <span class="highlight">${new Date().toLocaleDateString("en-GB", options.year)}</span>`;
    date1.innerHTML = `Last Modification: <span class="highlight">${new Date().toLocaleDateString("en-GB", options)}</span>`;
} 

catch (e) {
    alert("Error with code or your browser does not support Locale");
}


// DATE FOR HEADER
const date2 = document.querySelector("#date2");
try {

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    date2.innerHTML = `<span class="highlight">${new Date().toLocaleDateString("en-GB", options)}</span>`;
}

catch (e) {
    alert("Error with code or your browser does not support Locale");
}





// Long hand method ... building day and month names from built-in date methods.
const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#year1").textContent = `${year}`;



// var currentDate = new Date();
// var months = currentDate.getMonth();
// var days = currentDate.getDate();
// var years = currentDate.getFullYear();
// var fullDate = months + '-' + days + '-' + years;
// document.write(fullDate());


// const timeElement = document.querySelector(".date")

// //
// function formatDate(date) {
//     const days = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
// }



