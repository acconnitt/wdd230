// https://css-tricks.com/the-complete-guide-to-lazy-loading-images/?fbclid=IwAR2gm3q1j6eZ9rNYo2YcXVz5dsGSJU0xHfsWCTsGl-NqEdT3xFlEJxfLmhs
// Method 1: Trigger the image load using Javascript events
// SLOWER than #2
// document.addEventListener("DOMContentLoaded", function() {
//     var lazyloadImages = document.querySelectorAll("img.lazy");    
//     var lazyloadThrottleTimeout;

//     function lazyload () {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }    

//       lazyloadThrottleTimeout = setTimeout(function() {
//           var scrollTop = window.pageYOffset;
//           lazyloadImages.forEach(function(img) {
//               if(img.offsetTop < (window.innerHeight + scrollTop)) {
//                 img.src = img.dataset.src;
//                 img.classList.remove('lazy');
//               }
//           });
//           if(lazyloadImages.length == 0) { 
//             document.removeEventListener("scroll", lazyload);
//             window.removeEventListener("resize", lazyload);
//             window.removeEventListener("orientationChange", lazyload);
//           }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   });



// // Method 2: Trigger the image load using the Intersection Observer API
// document.addEventListener("DOMContentLoaded", function () {
//   var lazyloadImages;

//   if ("IntersectionObserver" in window) {
//     lazyloadImages = document.querySelectorAll(".lazy");
//     var imageObserver = new IntersectionObserver(function (entries, observer) {
//       entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.src = image.dataset.src;
//           image.classList.remove("lazy");
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyloadImages.forEach(function (image) {
//       imageObserver.observe(image);
//     });
//   } else {
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");

//     function lazyload() {
//       if (lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }

//       lazyloadThrottleTimeout = setTimeout(function () {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function (img) {
//           if (img.offsetTop < (window.innerHeight + scrollTop)) {
//             img.src = img.dataset.src;
//             img.classList.remove('lazy');
//           }
//         });
//         if (lazyloadImages.length == 0) {
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// })



// Tip 2: Add Buffer Time for Images to Load
// $(document).ready(function() {
//     var lazyloadImages;    

//     if ("IntersectionObserver" in window) {
//       lazyloadImages = document.querySelectorAll(".lazy");
//       var imageObserver = new IntersectionObserver(function(entries, observer) {
//         console.log(observer);
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             var image = entry.target;
//             image.src = image.dataset.src;
//             image.classList.remove("lazy");
//             imageObserver.unobserve(image);
//           }
//         });
//       }, {
//         root: document.querySelector("#container"),
//         rootMargin: "0px 0px 500px 0px"
//       });

//       lazyloadImages.forEach(function(image) {
//         imageObserver.observe(image);
//       });
//     } else {  
//       var lazyloadThrottleTimeout;
//       lazyloadImages = $(".lazy");

//       function lazyload () {
//         if(lazyloadThrottleTimeout) {
//           clearTimeout(lazyloadThrottleTimeout);
//         }    

//         lazyloadThrottleTimeout = setTimeout(function() {
//             var scrollTop = $(window).scrollTop();
//             lazyloadImages.each(function() {
//                 var el = $(this);
//                 if(el.offset().top < window.innerHeight + scrollTop + 500) {
//                   var url = el.attr("data-src");
//                   el.attr("src", url);
//                   el.removeClass("lazy");
//                   lazyloadImages = $(".lazy");
//                 }
//             });
//             if(lazyloadImages.length == 0) { 
//               $(document).off("scroll");
//               $(window).off("resize");
//             }
//         }, 20);
//       }

//       $(document).on("scroll", lazyload);
//       $(window).on("resize", lazyload);
//     }
//   })



// TEACHER SOLUTION 

// //get all imgs with data-src attribute
// const imagesToLoad = document.querySelector("img[data-src");

// // console.log(imagesToLoad);

// const imgOptions = {
//   rootMargin: '0px 0px -500px 0px',
//   threshold: 1
// };

// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// //Obsert the page and see what content is loaded
// //First check to see if Intersection Observer is supported
// if ('IntersectionObserver' in window) {
//   const imgObserver = new IntersectionObserver((items, imgObserver) => {
//     items.forEach(item => {

//       if (item.isIntersecting) {
//         loadImages(item.target);
//         imgObserver.unobserve(item.target);
//       }
//     });
//   }, imgOptions);

//   //loop through each img and check status and load if necessary
//   imagesToLoad.forEach(img => {
//     imgObserver.observe(img);
//   });
// } else { // just load ALL images if not supported
//   imagesToLoad.forEach(img => {
//     loadImages(img);
//   });
// }





// //Lazy loading
// // create config object: rootMargin and threshold
// // are two properties exposed by the interface
// const config = {
//   rootMargin: '0px 0px -500px 0px',
//   threshold: 0
// };

// // register the config object with an instance
// // of intersectionObserver
// let observer = new intersectionObserver(function(entries, self) {
//   // iterate over each entry
//   entries.forEach(entry => {
//     // process just the images that are intersecting.
//     // isIntersecting is a property exposed by the interface
//     if(entry.isIntersecting) {
//       // custom function that copies the path to the img
//       // from data-src to src
//       preloadImage(entry.target);
//       // the image is now in place, stop watching
//       self.unobserve(entry.target);
//     }
//   });
// }, config);

// const imgs = document.querySelectorAll('[data-src]');
// imgs.forEach(img => {
//   observer.observe(img);
// });


//COMPANERO
// let imagesToLoad = document.querySelectorAll("img[data-src]");
// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// if ("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   }, imgOptions);

//   imagesToLoad.forEach((img) => {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });
// }



// TEACHER SOLUTION
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