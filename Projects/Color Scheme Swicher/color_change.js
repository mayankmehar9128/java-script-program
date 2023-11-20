// const buttons = document.querySelector('.button');
const body = document.querySelector('body');


// Example assuming buttons is a NodeList
const buttons = document.querySelectorAll('.button');
const buttonsArray = Array.from(buttons);

buttonsArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor= e.target.id;
    });
});

