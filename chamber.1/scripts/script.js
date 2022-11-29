// OPEN AND CLOSE MENU 
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;






// DATE FOR FOOTER
// Select the HTML element to manipulate
const year1 = document.querySelector("#year1");
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
} catch (e) {
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
} catch (e) {
  alert("Error with code or your browser does not support Locale");
}

// Display banner on page only on 
// Monday and Tuesdays 
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();

// DISPLAY BANNER
function weeklyBanner() {

  if (dayOfWeek === 1 || dayOfWeek === 2) {
    // Calling banner id  #banner 
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }
}

weeklyBanner();






//LAZY LOADING
//get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

console.log(imagesToLoad);

const imgOptions = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 1
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//Obsert the page and see what content is loaded
//First check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {

      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  //loop through each img and check status and load if necessary
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else { // just load ALL images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}







//NUMBER OF VISITS
//DAYS SINCE LAST VISIT

const visit_display = document.querySelector("#num_visits");
const days_since_last_visit = document.querySelector("#days_since_last_visit");


// variables to store new data 
let today_date = new Date(); //current date
let last_date_visited; //starts empty
let days_passed = 0; //starts on 0


// get num_visit from the localStorage
let num_visits = Number(window.localStorage.getItem("list"));


// if num_visit is not 0 
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

// not sure what is the purpose
const add_to_storage = () => {
  localStorage.setItem("last_date_visited", today_date.getTime());
  localStorage.setItem("today_date", today_date.getTime());
};

// set new date to today_date
const set_new_date = () => {
  localStorage.setItem("today_date", today_date.getTime());
  // call calculate_days function 
  days_passed = calculate_days();
};

// calculating how many days have passed 
const calculate_days = () => {

  // assign values to new variable for computation 
  let now = localStorage.getItem("today_date");
  let last = localStorage.getItem("last_date_visited");

  // subtatracting todays date and last date visited
  let difference = now - last;

  days_passed = difference / (1000 * 3600 * 24);
  // round the number to the nearest ten 
  days_passed = Math.round(days_passed);
  //return results
  return days_passed;
};

// if last_get_visited has not value
if (!localStorage.getItem("last_date_visited")) {
  //add data
  add_to_storage();
  days_passed = calculate_days();
} else { // set a new date
  set_new_date();
}

days_since_last_visit.innerHTML = days_passed;

localStorage.setItem("last_date_visited", today_date.getTime());