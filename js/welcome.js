let myaccount = document.querySelector(".welcome .myaccount");
let order = document.querySelector(".welcome .link");
let i = document.querySelector(".welcome .icon i");
let par = document.querySelector(".welcome .icon");

myaccount.onclick = function () {
  i.classList.toggle("fa-plus");
  order.classList.toggle("close");
  par.classList.toggle("close");
};
