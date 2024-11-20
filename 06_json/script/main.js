/* 
// For-Schleife, die alle max_weights zu Numbers konvertiert:
for (let i = 0; i < data.length; i++) {
    // If it is a string, convert it to a number
    if (typeof data[i].max_weight === 'string') {
        // Replace comma with dot
        let weightWithDot = data[i].max_weight.replace(',', '.');

        // Parse the string to a float number
        let parsedWeight = parseFloat(weightWithDot);

        // Update the max_weight in the data array
        data[i].max_weight = parsedWeight;
    }
}
 */


// Funktion, der als Parameter eine Property übergeben werden kann, die zu einer Number konvertiert werden soll:
function convertStringsToNumbers(propToClean) {
    console.log(`cleaning string values inside ${propToClean} properties`);
    for (let i = 0; i < data.length; i++) {
        // If it is a string, convert it to a number
        if (typeof data[i][propToClean] === 'string') {
            // Replace comma with dot
            let stringWithDot = data[i][propToClean].replace(',', '.');

            // Parse the string to a float number
            let parsedValue = parseFloat(stringWithDot);

            // Update the max_weight in the data array
            data[i][propToClean] = parsedValue;
        }
    }
}

convertStringsToNumbers("max_weight");
convertStringsToNumbers("max_age");

// Funktion, die einen Button erstellt und beim Klicken die Daten als JSON herunterlädt
function createDownloadButton() {
    const button = document.createElement('button');
    button.innerText = 'Download Data as JSON';
    button.onclick = function() {
        const dataStr = JSON.stringify(data, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        a.click();
        URL.revokeObjectURL(url);
    };
    document.body.appendChild(button);
}

createDownloadButton();

/* 
// alle Tiere ausgeben
for (let i = 0; i < data.length; i++) {
    console.log(data[i].name);
} 
*/

/* 
// alle tödlichen Tiere an die Konsole ausgeben:
console.warn("Tödliche Tiere:");
for (let i = 0; i < data.length; i++) {
    if (data[i].deaths > 0) {
        console.log(data[i].name);
    }
}
 */

/* 
//Ausgabe der Todesopfer des tödlichsten Tiers an die Konsole
let maxDeaths = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i].deaths > maxDeaths) {
        maxDeaths = data[i].deaths;
    }
}
console.log(maxDeaths);
 */

/* 
//Ausgabe des tödlichsten Tiers an die Konsole
let maxDeathsAnimal = data[0];
for (let i = 1; i < data.length; i++) {
    if (data[i].deaths > maxDeathsAnimal.deaths) {
        maxDeathsAnimal = data[i];
    }
}
console.log(`Das tödlichste Tier ist ${maxDeathsAnimal.name} mit ${maxDeathsAnimal.deaths} Todesopfern.`);
 */

/* 
// Ausgabe des Durchschnittsgewichts aller Tiere an die Konsole
let totalWeight = 0;
for (let i = 0; i < data.length; i++) {
    totalWeight += data[i].max_weight;
}
const averageWeight = Math.round(totalWeight / data.length);
console.log(`Das Durchschnittsgewicht aller Tiere ist ${averageWeight} kg.`)
 */

/* 
// Ausgabe des Gewichtsmedians der Tiere an die Konsole
const sortedByWeight = data.sort((a, b) => b.max_weight - a.max_weight);
const index = Math.floor(sortedByWeight.length / 2);
const weightMedian = sortedByWeight[index].max_weight;
console.log(`Der Gewichtsmedian der Tiere beträgt ${weightMedian} kg.`);
 */


// Ausgabe der 5 schwersten Tiere im Datensatz
const sortedWeight = data.sort((a, b) => b.max_weight - a.max_weight);
let fiveHeaviest = [];
for (let i = 0; i < 5; i++) {
    fiveHeaviest.push(sortedWeight[i]);
}
console.log("die 5 schwersten Tiere sind:");
console.log(fiveHeaviest);