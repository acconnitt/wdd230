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



// Method 2: Trigger the image load using the Intersection Observer API
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
})



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