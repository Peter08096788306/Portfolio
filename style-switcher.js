/*----------------------- toggle style switcher ----------------- */
const styleSwitcher = document.querySelector(".style-switcher-toggler");
styleSwitcher.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if( document.querySelector(".style-switcher").classList.toggle("open"))
    {
        document.querySelector(".style-switcher").classList.toggle("open")
    }
})  
/*------------------ theme colors ----------------------- */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled", "true");
        }

    })

}
/*------------------ theme light and dark mode ----------------------- */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



const side = document.querySelector(".aside");
const addbtn = document.querySelector(".add");
const addme = document.querySelector(".addme")

addbtn.addEventListener('click', () => {
    side.classList.toggle('aside-left');
    if(addme.getAttribute("src") === "./img/icon-menu.svg") {
        addme.setAttribute("src", "/img/icon-menu-close.svg")
    } else {
        addme.setAttribute("src", "./img/icon-menu.svg")
    }
})


const loader = document.querySelector(".loader-container");
const displayBody = document.querySelector(".display-body");

window.onload = function () {
    loader.style.visibility = "visible";
    // displayBody.style.display = "none"
    setTimeout(() => {
        loader.style.visibility = "hidden"
        loader.style.height = "0"
        loader.style.width = "10"
        loader.style.trasition = "all .2s linear"
        loader.classList.add("transition")
        displayBody.style.display = "block"
    }, 6000);
}