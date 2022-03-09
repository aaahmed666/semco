var marginSlider = document.getElementById("slider-margin");

noUiSlider.create(marginSlider, {
  start: [10, 2000],
  behaviour: "drag",
  connect: true,
  range: {
    min: 0,
    max: 5000,
  },
});

var marginMin = document.getElementById("slider-margin-value-min"),
  marginMax = document.getElementById("slider-margin-value-max");

marginSlider.noUiSlider.on("update", function (values, handle) {
  if (handle) {
    marginMax.innerHTML = Math.round(values[handle]) + ` SAR`;
  } else {
    marginMin.innerHTML = Math.round(values[handle]) + ` SAR`;
  }
});

$(document).ready(function () {
  $(".find").select2();
});

const section = document.querySelector(".category .section");
const uii = document.querySelector(".category .section i");
const section0 = document.querySelector(".category .section1");
const uii0 = document.querySelector(".category .section1 i");
const uii00 = document.querySelector(".category .description i");
const desco = document.querySelector(".category .description");
const noslid = document.querySelector(".category .noslide");

section.onclick = function () {
  uii.classList.toggle("show");
};

section0.onclick = function () {
  uii0.classList.toggle("show");
};

desco.onclick = function () {
  uii00.classList.toggle("show");
  noslid.classList.toggle("show");
};

var acc = document.getElementsByClassName("section");
var panel = document.querySelector(".category .radio-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var accc = document.getElementsByClassName("section1");
var panell = document.querySelector(".category .radio-item0");
var i;

for (i = 0; i < accc.length; i++) {
  accc[i].addEventListener("click", function () {
    if (panell.style.maxHeight) {
      panell.style.maxHeight = null;
    } else {
      panell.style.maxHeight = panell.scrollHeight + "px";
    }
  });
}

// var acccc = document.getElementsByClassName("description");
// var panelll = document.querySelector(".category .noslide");
// var i;

// for (i = 0; i < acccc.length; i++) {
//   acccc[i].addEventListener("click", function () {
//     if (panelll.style.maxHeight) {
//       panelll.style.maxHeight = null;
//     } else {
//       panelll.style.maxHeight = panelll.scrollHeight + "px";
//     }
//   });
// }
