let clickMe = document.querySelector('button');

function ouch() {
    alert("I told you don't press me")
}

// clickMe.onclick= ouch;

clickMe.addEventListener('click', ouch);

//-------------------------------------------------------------

//Event and preventDefault

let user = document.querySelector('a')

function not(event) {
    event.preventDefault();
    alert('Google is not for you');
}

user.addEventListener('click', not)

//---------------------------------------------------------------

//Mouse Event

