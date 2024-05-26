const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const display = document.querySelector("gridArticle");

gridButton.addEventListener("click", () => {
    display.classList.add("gridButton");
    display.classList.remove("listButton");
});

listButton.addEventListener("click", () =>{
    display.classList.add("listButton");
    display.classList.remove("gridButton");

});