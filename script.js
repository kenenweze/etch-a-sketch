const container = document.querySelector(".container");
const button = document.getElementById("new-grid");

//Remove the grid that is currently in the window
button.addEventListener("click", () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
});

button.addEventListener("click", createGrid);

function createGrid() {

    let rows;
    let columns;
    let numOfSquares = Number(prompt("How many squares per side?"));

    for (rows = numOfSquares; rows > 0; rows--) {

        if (rows > 100) {
            alert("Maximum number has been crossed");
            break;
        } else {

            let row = document.createElement("div");
            container.appendChild(row);

            for (columns = numOfSquares; columns > 0; columns--) {
                let column = document.createElement("div");
                row.appendChild(column);

                column.addEventListener("mouseover", () => {
                    column.style.backgroundColor = "green";
                });
            }
        }
    }
}