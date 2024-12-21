const container = document.querySelector('main');
const tooltip = document.querySelector(".tooltip");
const containerHeight = container.offsetHeight;
const maxRadius = Math.max(...data.map(body => body.meanRadius));
const coefficient = containerHeight / (maxRadius * 2);

// initial logs:
// console.log(`containerHeight: ${containerHeight}`);
console.log(`coefficient: ${coefficient}`);
// console.log(`maxRadius: ${maxRadius}`);

init();

function init() {
    data = sortArrayByKey(data, 'meanRadius');
    createCircles();
    concentricView();
}

function createCircles() {
    data.forEach((body) => {
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

        divBox.setAttribute('data-id', body.id);
        divBox.setAttribute('data-semimajorAxis', body.semimajorAxis);
        divBox.setAttribute('data-meanRadius', body.meanRadius);
        divBox.setAttribute('data-name', body.englishName);

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
}

function concentricView() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle) => {
        // Alle Kreise (auch Monde) wieder sichtbar machen:
        circle.classList.remove('hidden');
        // im zweiten View hinzugefügte Styles entfernen:
        circle.style.removeProperty('opacity', 'transform');

        // Rest wie bisher:
        const meanRadius = parseFloat(circle.getAttribute('data-meanRadius'));

        circle.style.width = (meanRadius * 2 * coefficient) + "px";
        circle.style.height = (meanRadius * 2 * coefficient) + "px";
        circle.style.marginTop = (0 - meanRadius * coefficient) + "px";
        circle.style.marginLeft = (0 - meanRadius * coefficient) + "px";
    });
}

function positionedView() {
    document.querySelectorAll('.moon').forEach(moon => moon.classList.add('hidden'));
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.style.removeProperty('marginTop', 'marginLeft');

        // im Kreis gespeicherte Umlaufbahn:
        const semimajorAxis = parseFloat(circle.getAttribute('data-semimajorAxis'));
        // Zufälliger Winkel 0-360°:
        const angle = Math.random() * 360;
        // Koeffizient, mit dem die errechneten Positionen multipliziert werden:
        const axisScaleFactor = 0.000000075;

        // x- und y-Werte via Sinus und Cosinus berechnen:
        let x = semimajorAxis * axisScaleFactor * Math.cos(angle * (Math.PI / 180));
        let y = semimajorAxis * axisScaleFactor * Math.sin(angle * (Math.PI / 180));

        // jeder x- und y-Wert muss nun noch um die haöbe Hähe und Breite des Viewports verschoben werden, damit das Zentrum aller Umlaufbahnen nicht ganzu links oben in der Ecke liegt. Das geht auf verschiedenen Wegen, aber hier der kürzeste:
        circle.style.transform = `translate(${x}px, ${y}px)`;

        // die Kreise sind auch alle nicht mehr übereinander, daher muss die Opacity steigen, damit sie gut zu erkennen sind:
        circle.style.opacity = 0.5;

        // Und letztlich sollen sie alle auch deutlich kleiner dargestellt werden als in der ersten Ansicht, der Einfachheit halber setzen wir hier den Wert auf 20px
        circle.style.width = "20px";
        circle.style.height = "20px";
    });
}

