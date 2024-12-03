function greetConsole() {
    console.log("hallo solar system");
}

const container = document.getElementById("container");

let dataNew = [
    { name: "Mercury", radius: 5, color: "gray" },
    { name: "Venus", radius: 12, color: "orange" },
    { name: "Earth", radius: 13, color: "blue" },
    { name: "Mars", radius: 7, color: "red" },
    { name: "Jupiter", radius: 30, color: "brown" },
    { name: "Saturn", radius: 25, color: "goldenrod" },
    { name: "Uranus", radius: 20, color: "lightblue" },
    { name: "Neptune", radius: 20, color: "darkblue" },
    { name: "Pluto", radius: 4, color: "darkgray" },
];

// dataNew.sort((a, b) => b.radius - a.radius);

function sortArrayByKey(array, key) {
    return array.sort((a, b) => b[key] - a[key]);
}

dataNew = sortArrayByKey(dataNew, 'radius');

/* 
dataNew.forEach(planet => {
    let divBox = document.createElement("div");
    divBox.classList.add("planet");
    divBox.style.backgroundColor = planet.color;
    divBox.style.width = (planet.radius * 10) + "px";
    divBox.style.height = (planet.radius * 10) + "px";
    divBox.style.marginTop = (0 - planet.radius * 5) + "px";
    divBox.style.marginLeft = (0 - planet.radius * 5) + "px";
    divBox.addEventListener("click", () => {
        console.log(planet.name);
    });
    container.appendChild(divBox);
}); 
*/

data = sortArrayByKey(data, 'meanRadius');

data.forEach((body) => {
    // console.log(body.id);
    let divBox = document.createElement("div");
    divBox.classList.add("planet");
    divBox.style.backgroundColor = "white";
    divBox.style.width = (body.meanRadius * 2) + "px";
    divBox.style.height = (body.meanRadius * 2) + "px";
    divBox.style.marginTop = (0 - body.meanRadius) + "px";
    divBox.style.marginLeft = (0 - body.meanRadius) + "px";
    divBox.addEventListener("click", () => {
        console.log(body.name);
    });
    container.appendChild(divBox);
});



/* Beispiel einer return-Funktion */
function shoutBack() {
    return "hallo";
}

console.log(shoutBack());