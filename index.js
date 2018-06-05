const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const h1text = h1.textContent
const h2text = h2.textContent

b1.style.color = "blue";
b2.style.color = "blue";

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

document.querySelector('form').addEventListener('submit', function(e){
    event.preventDefault();
    
    const form = document.querySelector('form');
    h1.innerHTML = form.elements['newHeading'].value;
});