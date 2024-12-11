const container = document.getElementById("container");
const tooltip = document.querySelector(".tooltip");

function sortArrayByKey(array, key) {
    return array.sort((a, b) => b[key] - a[key]);
}

data = sortArrayByKey(data, 'meanRadius');

const containerHeight = container.offsetHeight;
console.log(`containerHeight: ${containerHeight}`);
const maxRadius = Math.max(...data.map(body => body.meanRadius));
console.log(`maxRadius: ${maxRadius}`);
const coefficient = containerHeight / (maxRadius * 2);
console.log(`coefficient: ${coefficient}`);

data.forEach((body) => {
    // console.log(body.id);
    let divBox = document.createElement("div");
    divBox.classList.add("circle");
    switch (body.bodyType) {
        case "Moon":
            divBox.classList.add("moon");
            break;
        case "Planet":
            divBox.classList.add("planet");
            break;
        case "Dwarf Planet":
            divBox.classList.add("dwarf-planet");
            break;
        default:
            divBox.classList.add("asteroid");
            break;
    }
    divBox.style.width = (body.meanRadius * 2 * coefficient) + "px";
    divBox.style.height = (body.meanRadius * 2 * coefficient) + "px";
    divBox.style.marginTop = (0 - body.meanRadius * coefficient) + "px";
    divBox.style.marginLeft = (0 - body.meanRadius * coefficient) + "px";

    divBox.addEventListener("mouseover", () => {
        console.log(body.name);
        tooltip.textContent = body.name;
        tooltip.classList.remove("hidden");
    });
    divBox.addEventListener("mouseout", () => {
        tooltip.classList.add("hidden");
    });
    divBox.addEventListener("mousemove", (event) => {
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + "px";
    });
    container.appendChild(divBox);
});