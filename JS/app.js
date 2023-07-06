// Opening/closing aside
const aside = document.querySelector("#aside")
const openAside = document.querySelector("#open-aside")
const closeAside = document.querySelector("#close-aside")

openAside.addEventListener("click", () => {
  aside.classList.add("aside-opened")
})

closeAside.addEventListener("click", () => {
  aside.classList.remove("aside-opened")
})

// Change header on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("header-scroll");
  } else {
    document.getElementById("header").classList.remove("header-scroll");
  }
}