const container = document.querySelector(".container");

let sqr = 16;
container.style.setProperty("--square-size", "38px");
drawSketch(sqr*sqr);

function drawSketch(sqr) {
    for(let i = 0; i < sqr; i++) {
        const div = document.createElement("div");

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })

        container.appendChild(div);
    }
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    sqr = Number(prompt("How many squares do you want it to be?"));
    if(Number.isInteger(sqr) && sqr > 0 && sqr < 100) {
        container.replaceChildren();
        container.style.setProperty("--square-size", `${640/sqr - 2}px`);
        drawSketch(sqr*sqr);
    }
})