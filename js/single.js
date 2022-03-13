$(document).ready(function () {
  $("#myTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// let ore = document.querySelector(".single .ore");
// let heroicon = document.querySelector(".single .ore i");
// // let hide = document.querySelector(".single .let");

// ore.onclick = function () {
//   heroicon.classList.toggle("fa-plus");
//   // hide.classList.toggle("close");
// };

$(document).ready(function () {
  $("#headingOne").click(function () {
    $("#headingOne button i").toggleClass("fa-minus fa-plus");
  });

  $("#headingTwo").click(function () {
    $("#headingTwo button i").toggleClass("fa-plus fa-minus");
  });
});
