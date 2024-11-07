const numbers = [1, 3, 2, 1, 5, 6, 13];
const stage = document.getElementById("stage");
const stageWidth = stage.offsetWidth;
const stageHeight = stage.offsetHeight;

const barWidth = 30;
const barSpacing = 10;

let totalBarsWidth = barWidth * numbers.length;
totalBarsWidth += barSpacing * (numbers.length - 1);

console.log(`stage dimensions: ${stageWidth}x${stageHeight}px`);
console.log(`totalBarsWidth: ${totalBarsWidth}`);

let diagramOffset = (stageWidth - totalBarsWidth) / 2;
console.log(`diagramOffset: ${diagramOffset}`);

let maxValue = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(`maxValue: ${maxValue}`);

let heightCoefficient = stageHeight / maxValue;
console.log(`heightCoefficient: ${heightCoefficient}`);

for (let i = 0; i < numbers.length; i++) {
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = numbers[i] * heightCoefficient + 'px';
    bar.style.left = diagramOffset + (barWidth + barSpacing) * i + 'px';
    stage.appendChild(bar);
}

