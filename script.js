const container = document.querySelector(".container");
const button = document.getElementById("new-grid");

button.addEventListener("click", () => {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
});
button.addEventListener("click", createGrid);

function createGrid() {
    let i;
    let j;
    let k = Number(prompt("How many squares per side?"));

    for (i = k; i > 0; i--) {

        if (i > 100) {
            alert("Maximum number has been crossed");
            break;
        } else {

            let row = document.createElement("div");
            container.appendChild(row);

            for (j = k; j > 0; j--) {
                let column = document.createElement("div");
                row.appendChild(column);

                column.addEventListener("mouseover", () => {
                    column.style.backgroundColor = "green";
                });
            }
        }
    }
}