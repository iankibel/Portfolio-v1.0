// ASIDE
const openAside = document.querySelector('#open-aside')
const closeAside = document.querySelector('#close-aside')
const aside = document.querySelector('#aside')

openAside.addEventListener("click", () => {
    aside.classList.add("active")
})
  
closeAside.addEventListener("click", () => {
    aside.classList.remove("active")
})