// let i = 0;
// const increase = function () {
//     let heading = document.getElementById("heading");
//     heading.innerText = ++i;
// }
// const decrease = function () {
//     let heading = document.getElementById("heading");
//     heading.innerText = --i;
// }
// const arr = function () {
//     const heading = document.createElement("h1");
//     heading.innerText = "Sri Lakshmi"
//     const cont = document.getElementById("container");
//     cont.append(heading);
// }
// document.addEventListener("click", () => {
//     const heading = document.createElement("h1");
//     heading.innerText = "Sri Lakshmi"
//     const cont = document.getElementById("container");
//     cont.append(heading);
// })

const changeimage=function(){
    const div=document.getElementById("container");
    div.style.backgroundImage="url('https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg'    )";
}
const resetimage=function(){
    const div=document.getElementById("container");
    div.style.backgroundColor="antiquewhite";
}