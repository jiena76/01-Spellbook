let data = [];

function addSpells(e){

    const input = e.target.spell.value;

    // when nothing entered but submit pressed, do nothing
    if(!input){
        return;
    }

    const level = document.querySelector('.range-bar').value;

    //document.querySelector('.spells').innerHTML += `<li>lvl.<span style="color:${colors[level]};background-color:white">${level}</span> ${e.target.spell.value}</li>`;
    //createNode(e);
    document.querySelector('.spells').innerHTML +=
        `<li><button class='b' onclick="buttonPressed(event);">lvl.${level} 
        ${input}</button></li>`;
    
    // push the data into an array
    data.push(`${input} ${level}`);

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

// WHAT IS BIND???

function buttonPressed(e){
    e.preventDefault();

    // element = selects <li> parent of <button>
    const element = e.target.parentNode;

    element.parentNode.removeChild(e.target.parentNode);
    /*
    // remove an element from the list
    const element = document.getElementById(e.target.value);
    element.parentNode.removeChild(element);

    // remove the data from the array by setting it to null
    data[e.target.value] = null;

    console.log(data);*/
}

//  Doesn't work anymore after changing elements of the list into buttons
// by the level, sort the unordered list
function levelSort(){
    const lis = document.querySelectorAll('li');
    let items = [];

    // push all items to an array
    for(let i = 0; i < lis.length; i++){
        items.push(lis[i].innerText);
    }

    items.sort();

    // edit existing list items with ordered items
    for(let i = 0; i < lis.length; i++){
        lis[i].innerHTML = `<button class='b' onclick="buttonPressed(event);" value=${lis[i].id}>${items[i]}</button>`;
        data[lis[i].id] = items[i];
    }

    console.log(items);
    console.log(lis);
};

document.querySelector('.range-bar').addEventListener("change", function(e){
    console.log(e.target.value);
    document.querySelector('.value').innerHTML = `Value = ${e.target.value}`;
});