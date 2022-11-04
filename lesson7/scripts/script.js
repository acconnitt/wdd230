// const targets = document.querySelectorAll('img');

// const lazyLoad = target => {
//   const io = new IntersectionObserver((entries, observer) => {
//     console.log(entries)
//     entries.forEach(entry => {
//       console.log('');

//       if (entry.isIntersecting) {
//         const img = entry.target;
//         const src = img.getAttribute('data-src');

//         img.setAttribute('src', src);
//         // img.classList.add('fade');

//         observer.disconnect();
//       }
//     });
//   });

//   io.observe(target)
// };

// targets.forEach(lazyLoad);



// const imagesToLoad = document.querySelectorAll("img[data-src]");

// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -500px 0px" 
// };

// const loadImages = (image) => {
//     image.setAttribute("src", image.getAttribute('data-src'));
//     image.onload = () => {image.removeAttribute('data-src');};
// }

// if ('IntersectionObserver' in window){
//     const imgObserver = new IntersectionObserver((items, observer) => {
//         items.forEach((item ) => {
//         });
//     },imgOptions);

//     imagesToLoad.forEach((img) =>{
//         imgObserver.observe(img);
//     });

//     });

// }

// else{
//     imagesToLoad.forEach((img) => {
//         loadImages(img);
//     })
// }






// document.addEventListener("DOMContentLoaded", function() {
//     let lazyloadImages = document.querySelectorAll("img.lazy-load");
//     let lazyloadThrottleTimeout;

//     function lazyload() {
//       if(lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }
//       lazyloadThrottleTimeout = setTimeout(function() {
//         let scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//           if(img.offsetTop < (window.innerHeight + scrollTop)) {
//             img.src = img.dataset.src;
//             img.classList.remove('lazy');
//           }
//         });
//         if(lazyloadImages.length == 0) {
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }
//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   });

















// if ("IntersectionObserver" in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if (item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }



// let imagesToLoad = document.querySelectorAll("img[data-src]");
// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });











// const images = document.querySelectorAll("img[data-src]");
// function preloadImage(img){
//     const src = img.getAttribute("data-src");
//     if(!src){
//         return;
//     }
//     img.src = src;

// }


// const imgOptions = {
//     threshold: 1,
//     rootMargin: "0px 0px -500px 0px" 
// };


// const imgObserver = new IntersectingObserver((entries, imgObserver) => {

//     entries.forEach(entry => {
//         if (!entry.isIntersecting){
//             return;
//         }
//         else{
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }  
//     })

// }, imgOptions)

// images.forEach(image =>{
//     imgObserver.observe(img);
// })



// const imgElements = document.querySelectorAll("img[data-src]");
 
// const lazyLoadObserver = new IntersectingObserver(
//     (entries, Observer) => {
//         console.log(entries);
//         entries.forEach((entry) => {
//             if (!entry.isIntersecting) return;
//             entry.target.src = entry.target.dataset.src;
//         });
//     },

//     {threshold:1}
// );
// imgElements.forEach((im) => lazyLoadObserver.observe(img));


// let imagesToLoad = document.querySelectorAll("img[data-src]");
// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset['src']
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(callback, options)
const imgList = document.querySelectorAll('.img')
imgList.forEach(img=> {
    observer.observe(img)
})