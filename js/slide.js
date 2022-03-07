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
