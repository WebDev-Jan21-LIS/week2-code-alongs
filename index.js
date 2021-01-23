console.log('JS Connected');

//1. getElementById //=> We only get one element
let theCatDiv = document.getElementById('cat');
//theCatDiv.innerHTML = "I'm a cat";

theCatDiv.style.backgroundColor = 'red';
theCatDiv.style.border = '2px green solid';
theCatDiv.style.fontSize = '5rem';
theCatDiv.style.marginTop = '3rem';
theCatDiv.style.paddingBottom = '3rem';

console.log(theCatDiv);

//2. getElementsByClassName //<= We are gonna get a list of elements
let mice = document.getElementsByClassName('mouse');
console.log(mice);
//Set the first mice element with innerHTML of "mouse";
mice[0].innerHTML = 'Bananas';

//Iterates through all mice divs
let miceArray = [...mice]; //<= converts the mice list into an array

miceArray.forEach((mouse) => {
    mouse.innerHTML = 'Bananas';
});

//3. getElementsByTagName
let myDivs = document.getElementsByTagName('div');
console.log(myDivs);

//4. querySelector //<= Just gets the first occurrence
let firstMouse = document.querySelector('.mouse');
firstMouse.style.backgroundColor = 'blue';

let firstCat = document.querySelector('#cat');
let firstDiv = document.querySelector('div');

let blueCatInsideCat = document.querySelector('#cat .blue-cat');
blueCatInsideCat.innerHTML = 'cat blue cat';

//5. querySelectorAll //<= Gets all occurrences
let allMice = document.querySelectorAll('.mouse');

console.log(firstDiv.accessKey);

//Get the img tag (there's just one on your DOM) change the src attribute
let img = document.querySelector('img');
img.src = "https://placekitten.com/g/200/400";
img.alt = "yet another cat";