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
let menuicon = document.querySelector(".menuicon");

menuicon.addEventListener("click", function () {
  navitems.classList.toggle("show");
});
