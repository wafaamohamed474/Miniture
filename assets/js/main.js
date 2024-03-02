let navBar = document.querySelector(".header");

window.onscroll = function () {
  if (scrollY >= 1) {
    navBar.classList.add("header2");
  } else {
    navBar.classList.remove("header2");
  }
};

var wow = new WOW({
  boxClass: "animate__animated", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

// const lightbox = GLightbox({
//   touchNavigation: true,
//   loop: true,
//   autoplayVideos: true,
// });

 
let msgImg = document.querySelector(".msg-img");
let msgBtn = document.querySelector(".msg-btn");
let msgContent = document.querySelector(".msg-content");
let inputText = document.querySelector(".input-text");
let clickBtn = document.querySelector(".btn-send");
let clientDiv = document.querySelector(".clientmsg");
let exitBtn = document.querySelector(".exit");

setTimeout(displayBtn, 2000);
function displayBtn() {
  msgBtn.style.position = "fixed";
}

msgBtn.addEventListener("click", function () {
  msgImg.classList.toggle("msg-img2");
  msgContent.classList.toggle("msg-content2");
});

let arr = [];

inputText.addEventListener("mouseenter", function () {
  clickBtn.classList.add("btn-send2");
  clickBtn.addEventListener("click", function () {
    if (inputText.value !== "") {
      let clientmsg = {
        msg: inputText.value,
      };
      arr.push(clientmsg);
      let data = "";
      for (let i = 0; i < arr.length; i++) {
        data += `<p>${arr[i].msg}</p>`;
      }
      clientDiv.innerHTML = data;
      inputText.value = "";
    }
  });
});

inputText.addEventListener("mouseleave", function () {
  if (inputText.value === "") {
    clickBtn.classList.remove("btn-send2");
  }
});

exitBtn.addEventListener("click", function () {
  msgContent.classList.remove("msg-content2");
  msgImg.classList.remove("msg-img2");
});

var swiper = new Swiper(".myPagesFirstSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },  
});

var swiper = new Swiper(".myPagesSecondSwiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },  
});