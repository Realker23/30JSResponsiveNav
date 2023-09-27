const navItem = document.getElementById("navItem");
const menu = document.querySelector(".menu");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

menu.onclick = () => {
  navItem.classList.toggle("block");
  line1.classList.toggle("r1");
  line2.classList.toggle("v");
  line3.classList.toggle("r2");
};
