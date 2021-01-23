console.log('JS is connected');

//1. Get the paragrah and change its text to
//"Tell me your name";
let paragrah = document.getElementById('paragraph');
paragrah.innerText = 'Tell me your name';

//Add a new attribute to paragraph
paragrah.setAttribute('data-selector', 'someValue');

//2. Change the href of the anchor tag to https://www.google.com
//querySelector
let anchor = document.querySelector("#google-link");
//anchor.href = "https://www.google.com";
anchor.setAttribute('href', 'https://www.google.com');

// Create an element
let h2Tag = document.createElement('h2');
h2Tag.innerText = "Elephant";
let body = document.querySelector('body');
body.appendChild(h2Tag);
//body.prepend(h2Tag);

//3. Create paragraph with the text "I'm learning JavaScript"
//add it to the content div
let newParagraph = document.createElement('p');
newParagraph.innerText = "I'm learning JavaScript";
let contentDiv = document.querySelector('#content');
contentDiv.appendChild(newParagraph);
//contentDiv.parentElement.appendChild(newParagraph);

//Remove elements
let h1Tag = document.querySelector('#title');
contentDiv.removeChild(h1Tag);
// h1Tag.remove();

//4. Remove h2Tag
h2Tag.remove();

// Clear HTML
//contentDiv.innerHTML = '';
//contentDiv.innerHTML = '<div>Hello</div>';

let addItemButton = document.getElementById('add-item-button');
addItemButton.innerText = 'Adicionar';

let unorderedList = document.getElementById('item-list');
let itemNumber = 1;
addItemButton.onclick = () => {
    let newListItem = document.createElement('li');
    newListItem.innerText = `Item number ${itemNumber}`;
    unorderedList.appendChild(newListItem);
    newListItem.onclick = (e) => {
        e.currentTarget.remove();
    }
  //  alert('Clicking, yo!');
  //add a li to the ul with text - this is item number: itemNumber
  itemNumber++;
  console.log(itemNumber);
}

const someFunction = () => {

}

addItemButton.addEventListener('click', someFunction);

//7. Add a click event to the send-btn button and console.log the value
//of the input element with the id "username" (hint: input.value)

//Getting the send button reference
let sendButton = document.getElementById('send-btn');

sendButton.onclick = () => {
    
    //Grab the input
    let inputValue = document.getElementById('username').value;
    console.log(inputValue);

    //Clear the value of the input
    document.getElementById('username').value = '';
}

//Grabbing all li tags on the page
let liTags = document.getElementsByTagName('li');
//Convert tags collection to array
let liTagsArray = [...liTags];
//Iterating through each li tag
liTagsArray.forEach((liTag) => {
    liTag.onclick = (e) => {
        console.log('clicking on some li');
        //e -> event onclick
        //current target -> is the current element
        e.currentTarget.remove();
    }
});
