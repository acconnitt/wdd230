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





// Display banner on page only on 
// Monday and Tuesdays 
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();

// DISPLAY BANNER
function weeklyBanner() {

    if (dayOfWeek === 1 || dayOfWeek === 2){
        // Calling banner id  #banner 
        banner.style.display = "block";        
    }
    else{
        banner.style.display = "none";
    }
}

weeklyBanner();




//LAZY LOADING
//get all imgs with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// console.log(imagesToLoad);

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