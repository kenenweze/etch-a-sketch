const container = document.querySelector(".container");
const button = document.getElementById("square")

let i;
let numOfSquares;

button.addEventListener("click", () => {
    let squares = prompt("Enter the number of squares per side");
    return numOfSquares = Number(squares) * Number(squares);
})

for (i = 49; i > 0; i--) {
let item = document.createElement("div");
container.appendChild(item);

item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "green";
})
}
