// // let myaccount = document.querySelector(".welcome .myaccount");
// // let order = document.querySelector(".welcome .link");
// // let i = document.querySelector(".welcome .icon i");
// // let par = document.querySelector(".welcome .icon");
// let myorder = document.querySelector(".myaccount .myorder");
// let bad = document.querySelector(".myaccount .myorder i");

// // myaccount.onclick = function () {
// //   // i.classList.toggle("fa-plus");
// //   order.classList.toggle("close");
// //   par.classList.toggle("close");
// // };

// myorder.onclick = function () {
//   bad.classList.replace("fa-plus", "fa-minus");
//   // bad.classList.replace("fa-minus", "fa-plus");
// };

$(document).ready(function () {
  $(".welcome .icon").click(function () {
    $(".welcome .icon i").toggleClass("fa-minus fa-plus");
    $(".welcome .icon").toggleClass("light");
    $(".welcome .link").slideToggle(function () {
      if ($(this).is(":visible")) $(this).css("display", "flex");
    });
  });

  $(".welcome .myorder").click(function () {
    $(".welcome .myorder i").toggleClass("fa-minus fa-plus");
    $(".welcome .myorder").toggleClass("light");
    $(".welcome .do").slideToggle(function () {
      if ($(this).is(":visible")) $(this).css("display", "flex");
    });
  });
});
