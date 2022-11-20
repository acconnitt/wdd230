//NUMBER OF VISITS
//DAYS SINCE LAST VISIT

// initialize display elements
const visit_display = document.querySelector("#num_visits");
const days_since_last_visit = document.querySelector("#days_since_last_visit");

// get the stored value in localStorage
let num_visits = Number(window.localStorage.getItem("list"));

// determine if this is the first visit or display the number of visits.
if (num_visits !== 0) {
    //display number of visits
    visit_display.textContent = num_visits;
    // if this is first visit
} else {
    // display message
    visit_display.textContent = `Welcome! This is your first time visiting!`;
}

// increment num_visits by 1 after displaying it
num_visits++;
// store new num_visits value
localStorage.setItem("list", num_visits);

// show todays date.
days_since_last_visit.textContent = Date.now();



