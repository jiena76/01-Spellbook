/*const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

let h1text = h1.textContent
const h2text = h2.textContent

//document.querySelectorAll("button").style.color = 'yellow';
b1.style.color = "blue";
b2.style.color = "blue";

// change heading1 content & color
b1.addEventListener('click', function(){
    if(h1.textContent === h1text){
        h1.textContent = "HEY!";
        h1.style.color = "deeppink";
        h1.style.backgroundColor = 'Gold';
    }
    else{
        h1.textContent = h1text;
        h1.style.color = "black";
        h1.style.backgroundColor = 'transparent';
    }
    b1.style.color="purple";
});

// change heading2 & color
b2.addEventListener('click', function(){
    if(h2.textContent === h2text){
        h2.textContent = "MAGIC";
        h2.style.color = "Tomato";
        h2.style.backgroundColor = "aqua";
    }
    else{
        h2.textContent = "Good morning";
        h2.style.color = "black";
        h2.style.backgroundColor = "transparent";
    }
    b2.style.color = 'purple';
});
*/

/*
    REAL HOMEWORK BEGINS HERE
*/ 

// update heading with the input
/*function setHeading(){
    h1.textContent = document.querySelector('form')[0].value;
    // this also works:
    //h1.textContent = document.querySelector('input').value;
    h1text = h1.textContent;
}*/

const colors = {
    1: 'green',
    2: 'yellow',
    3: 'orange',
    4: 'red',
    5: 'black'
}

function addSpells(e){
    // when nothing entered but submit pressed, do nothing
    if(!e.target.spell.value){
        return;
    }

    const level = document.querySelector('.range-bar').value;

    document.querySelector('.spells').innerHTML += 
        `<li>lvl.<span style="color:${colors[level]};background-color:white">
    ${level}</span> ${e.target.spell.value}</li>`;
    //createNode(e);
    document.querySelector('form').reset();
}

function createNode(e){
    let li = document.createElement("li")
    const level = document.querySelector('.range-bar').value;

    li.appendChild(document.createTextNode(
        `lvl.<span style="color:${colors[level]}">
        ${level}</span> ${e.target.spell.value}`));
    document.querySelector('ul').appendChild(li);
}

// when the form is submitted
document.querySelector('form').addEventListener('submit', function(e){
    // forbids refreshing
    e.preventDefault();

    addSpells(e);
});

// "submit" button works when enter is pressed instead of pressing the button
/*window.addEventListener('keydown', function(e){
    if(e.keyCode === 13)
        addSpells(e);
});*/

// alphabetically sort the unordered list
function alphabeticalSort(){
    const lis = document.querySelectorAll('li');
    let items = [];

    // push all items to an array
    for(let i = 0; i < lis.length; i++){
        items.push(lis[i].innerHTML);
    }

    items.sort();

    // edit existing list items with ordered items
    for(let i = 0; i < lis.length; i++){
        lis[i].innerHTML = items[i];
    }
};

document.querySelector('.range-bar').addEventListener("mousemove", function(e){
    console.log(e.target.value);
    document.querySelector('.value').innerHTML = `Value = ${e.target.value}`;
});