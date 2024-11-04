console.log("Program started");
/* 
let lieblingsZahl = 121;
const moritzFavorite = 4;
const kurslieblingszahlen = [1, 2, 3, 4]; */
let numbers;
numbers = [1, 3, 6, 9, 3, 6, 2];

//console.log(numbers[4]);

/* console.log(lieblingsZahl + moritzFavorite);
console.log(1 + 1); */

/* for (let i = 0; i < 5; i++) {
    console.log(i);
} */


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    let bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = numbers[i] * 10 + 'px';
    bar.style.left = 40 * i + 'px';
    let stage = document.getElementById("stage");
    stage.appendChild(bar);
}

console.log("for-schleife zu ende");