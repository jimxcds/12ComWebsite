function showMoblieNav() {
    let mobileNav = document.getElementById("mobile-nav")
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
}
// let target = document.querySelector("#firstTextBox");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('textBoxAnimation');
    }else {
      //entry.target.classList.remove('textBoxAnimation');
    }
  });
}, {
  threshold: 0.2
});

const quoteText = document.querySelectorAll('.quoteText');
quoteText.forEach((el) => observer.observe(el));

// let options = {
//   // null is to target document viewport
//   root: null,
//   // bounding box of target element before computing visibility
//   rootMargin: "0px",
//   // indicates at what percentage of the target's visibility the ovbserver callback should be executed
//   threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
// }

// let callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry.intersectionRatio);
//     if (entry.intersectionRatio>.99){
        
//     }
//     //entry.target.style.opacity = entry.intersectionRatio;
//   })
  
// }

// // create the intersection observer
// let observer = new IntersectionObserver(callback, options);

// observer.observe(target);