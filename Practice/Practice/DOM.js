document.getElementById("color").style.color = "red";

//------------------------------------------------------------------------

let ps = document.getElementsByTagName('a');
for (let i = 0; i < ps.length; i++) {
    ps[i].style.color = 'blue'
   alert(`This is paragraph number ${i}`) ;
}

//-------------------------------------------------------------------------

let myClass = document.getElementsByClassName("myClass");
for (let i = 0; i < myClass.length; i++) {
    myClass[i].style.color = 'yellow'
    
}

//--------------------------------------------------------------------------

let queryS = document.querySelector('#special .someone');
queryS.style.color = 'red';

//--------------------------------------------------------------------------

let querySA = document.querySelectorAll('#special1 p');
for (let i = 0; i < querySA.length; i++) {
    querySA[i].style.color = 'pink';
}

//--------------------------------------------------------------------------

let myDiv = document.querySelector('.special2');
myDiv.innerHTML = "<p>This paragraph is newly added.</p>";

//-------------------------------------------------------------------------

let firstPar = document.querySelector('p');
firstPar.className = "red";

//---------------------------------------------------------------------------

let myCheck = document.querySelector('input');
myCheck.setAttribute('checked', 'checked');

//---------------------------------------------------------------------------

let myTag = document.createElement('p');
let myText = document.createTextNode("This paragraph is created by create element");
myTag.appendChild(myText);
let myDiv1 = document.querySelector('div');
myDiv1.appendChild(myTag);

//-----------------------------------------------------------------------------
