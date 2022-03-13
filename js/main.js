$(document).ready(function () {
  $(".collapse").collapse();
  $("#myCollapsible").collapse({
    toggle: false,
  });
});

let icon = document.querySelector(".up");
let social = document.querySelector("nav .social");
let header = document.getElementById("side-header");
let menu = document.querySelector(".logo .menu i.fa-bars");
let close = document.querySelector(".closeside i");
let popup = document.querySelector(".popup");
let lang = document.querySelector("#side-header .info");
let price = document.querySelector("#side-header .awsome");
let search = document.querySelector(".logo .menu i.fa-search");
let find = document.querySelector(".logo .search");
let hero = document.querySelector("#side-header .hero");
let click = document.querySelector("#side-header .down");
let up = document.querySelector("#side-header .go i");

window.onscroll = function () {
  if (this.scrollY >= 150) {
    icon.classList.add("show");
    if (window.innerWidth > 1200) {
      social.classList.add("hide");
      header.classList.add("hide");
    }
  } else {
    icon.classList.remove("show");
    if (window.innerWidth > 1200) {
      social.classList.remove("hide");
      header.classList.remove("hide");
    }
  }
};

icon.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

menu.onclick = function () {
  header.classList.add("open");
  popup.classList.add("open");
  lang.classList.add("open");
  price.classList.add("open");
  document.body.classList.add("ovh");
};

close.onclick = function () {
  header.classList.remove("open");
  popup.classList.remove("open");
  lang.classList.remove("open");
  price.classList.remove("open");
  document.body.classList.remove("ovh");
};

popup.onclick = function () {
  header.classList.remove("open");
  popup.classList.remove("open");
  lang.classList.remove("open");
  price.classList.remove("open");
  document.body.classList.remove("ovh");
};

search.onclick = function () {
  find.classList.toggle("open");
};

hero.onclick = function () {
  up.classList.toggle("open");
  click.classList.toggle("open");
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

var swiper = new Swiper(".new", {
  slidesPerView: 4,
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 30,
  pagination: {
    el: ".new .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },
});

var swiper = new Swiper(".follow", {
  slidesPerView: 4,
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 30,
  pagination: {
    el: ".follow .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
