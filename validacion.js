//NAV PAGE COLLAPSE
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

//TOGGLE MODE BUTTON
function changeColor() {
  document.body.classList.toggle("dark-mode");
} //yoshi beach dark-mode

//FIX NAV BUTTON
var nav_btn = document.getElementById("fix_btn");
function fixBoton() {
  if (window.scrollY > 100) {
    nav_btn.classList.add("sticky");
  } else {
    nav_btn.classList.remove("sticky");
  }
}
window.onscroll = function () {
  fixBoton();
};

//FORMULARIO 
