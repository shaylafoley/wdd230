const gridButton = document.querySelector("#gridButton");
const listButton = document.querySelector("#listButton");
const display = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display.classList.add("gridButton");
    display.classList.remove("listButton");
});

listButton.addEventListener("click", showList);

function showList() {
    display.classList.add("listButton");
    display.classList.remove("gridButton");
}