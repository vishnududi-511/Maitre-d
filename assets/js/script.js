$(".slider").slick({
  dots: false,
  infinite: true,
  autoplaySpeed: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  slidesToShow: 1,
  pauseOnHover: false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
let navitems = document.querySelector(".navitems");
let menubox = document.querySelector(".menuicon");

menubox.addEventListener("click", function () {
  navitems.classList.toggle("show");
});

let toggle_box = document.querySelector(".toggle-ball");
let pricebox = document.querySelectorAll(".price_box");

pricebox.forEach((priceBox) => {
  let tik_btn = priceBox.querySelector(".tik_checkbox");
  let cross_btn = priceBox.querySelector(".cross_checkbox");
  let second_box = priceBox.querySelector(".changing_box");
  let third_box = priceBox.querySelector(".chnaging_box2");

  toggle_box.addEventListener("click", function () {
    toggle_box.classList.toggle("toggle-ball-right");
    tik_btn.classList.toggle("tik");
    cross_btn.classList.toggle("cross");
    second_box.classList.toggle("cross");
    third_box.classList.toggle("tik");
  });
});

let toggleBall = document.querySelector(".toggle-ball");
let subscriptionType = document.querySelector(".sup_month");
let subscriptionamount = document.querySelector(".dollar_money");
// Add click event listener to the toggle box

toggleBall.addEventListener("click", function () {
  if (subscriptionType.innerHTML === "/Month") {
    subscriptionType.innerHTML = "/Yearly";

    subscriptionamount.innerHTML = "$999";
  } else {
    subscriptionType.innerHTML = "/Month";

    subscriptionamount.innerHTML = "$449";
  }
});

let contact_btn = document.querySelector(".contact_footer");
let callbtn = document.querySelector(".footer_new_btn");

contact_btn.addEventListener("click", function () {
  callbtn.classList.toggle("btn_show");
});

let preloader = document.querySelector(".preloader");

setTimeout(() => {
  preloader.classList.add("-top-105");
}, 3000);

AOS.init({
  duration: 1200,
  once: true,
});
