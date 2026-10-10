const btn = document.querySelector("#mode-btn")
const htmls = document.querySelector("html")
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

btn.addEventListener('click', () => {
    if (htmls.classList.contains("dark")) {
        htmls.classList.remove("dark")
        moon.style.display = "inline-block";
        sun.style.display = "none";
    } else {
        htmls.classList.add("dark")
        moon.style.display = "none";
        sun.style.display = "inline-block";
    }
})