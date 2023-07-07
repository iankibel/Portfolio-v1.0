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

// 
const asideGoTo0 = document.querySelector("#aside-goto0")
const asideGoTo1 = document.querySelector("#aside-goto1")
const asideGoTo2 = document.querySelector("#aside-goto2")
const asideGoTo3 = document.querySelector("#aside-goto3")
const asideGoTo4 = document.querySelector("#aside-goto4")

asideGoTo0.addEventListener("click", () => {
    aside.classList.remove("aside-opened")
})

asideGoTo1.addEventListener("click", () => {
  aside.classList.remove("aside-opened")
})

asideGoTo2.addEventListener("click", () => {
  aside.classList.remove("aside-opened")
})

asideGoTo3.addEventListener("click", () => {
  aside.classList.remove("aside-opened")
})

asideGoTo4.addEventListener("click", () => {
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

// 

const colorSchemePrefered = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const changeTheme = document.getElementById('btn-change-theme')

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme)
}

changeTheme.addEventListener("click", () => {
  let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
  setTheme(switchToTheme);
})

setTheme(localStorage.getItem('theme') || colorSchemePrefered);