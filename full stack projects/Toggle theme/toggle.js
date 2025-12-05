const body = document.body;
const lightbtn = document.getElementById("light-mode");
const darkbtn = document.getElementById("dark-mode");
lightbtn.addEventListener("click", () => setTheme("light"));
darkbtn.addEventListener("click", () => setTheme("dark"));

const setTheme = (theme) => {
    if (theme === "dark") {
        body.classList.add("dark")
    }
    else {
        body.classList.remove("dark")
    }
}