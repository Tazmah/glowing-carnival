let navToggler = document.querySelector(".nav-toggler");
let navLinks = document.querySelector(".nav_links");



navToggler.addEventListener("click", function () {
  navLinks.classList.toggle("toggleNav");
  if (this.children[0].classList.contains("fa-bars")) {
    this.children[0].classList.remove("fa-bars");
    this.children[0].classList.add("fa-times");
  } else {
    this.children[0].classList.remove("fa-times");
    this.children[0].classList.add("fa-bars");
  }
});

function addDropDown(){
  let dropMe = document.querySelector(".service-drop");
  dropMe.classList.toggle('drop');
}