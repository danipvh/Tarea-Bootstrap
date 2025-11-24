id= "btnArriba"

const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.classList.add("show");
    } else {
        btnArriba.classList.remove("show");
    }
});


btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


