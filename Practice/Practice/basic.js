// Start With JavaScript

document.write("\"Hello\" JavaScript");
document.write("<br>");
document.write('"Hello" JavaScript')
document.write("<br>");
document.write("<br>");



// if else
document.write("<h1>If Else</h1>")
let price= "4";
if (price <= 5) {
    document.write("Less than 5")
} else {
    document.write("More than 5")
}



//Ternary Operator
document.write("<h1>Ternary Operator</h1>")
let a = 10;
let msg = (a > 15) ? "True" : "False";
document.write(msg);
document.write("<br>");
(a < 15) ? document.write("True") : document.write("False")



// Block Scope Using let
document.write("<h1>Block Scope Using let</h1>")
if (true) {
    let fname = "Shyam";
    document.write(fname);
}
// Here we can not use let outside the if statement
// document.write(fname); 


//Looping with while()
document.write("<h1>Looping with while()</h1>");

let value = 1;

while (value <= 10) {
    document.write("<li>" + value + ") Welcome to JavaScript." + "</li>");
    value++;
}



//Looping with do while()
document.write("<h1>Looping with do while()</h1>");

let number = 1;

do {
    document.write("This result is come from the do while loop." + "<br>");
    number++;
} while (number <= 10);



//Looping with for()
document.write("<h1>Looping with for()</h1>");
for (let i = 0; i < 5; i++) {
    document.write(i + "<br>");
}



// alert box
document.write("<h1>Alert Box</h1>");
alert("This website need to access your microphone.");


// Confirm Box
document.write("<h1>Confirm Box</h1>");
/*const feedback = confirm("Do you like oue website?")

if(feedback){
    alert("Thanks");
}
else{
    alert("Sorry")
}*/

//Prompt Box
document.write("<h1>Prompt Box</h1>");
let name = prompt("What is your name?");
alert(name);

//-------------------------------------------------- Array-------------------------------------------------------//
document.write("<h1>Array</h1>");

//Method-1
document.write("<h5>Basic Array-Method 1</h5>")
var ary = ["1","Shyam","3","Home","5"];
var sum = 0;
document.write("<ul>");
for (let i = 0; i < ary.length; i++) {
    document.write("<li>" + ary[i] +"</li>");
}
document.write("</ul>");


var ary = [10, 20, 30, 40, 50]
    var sum = 0;
    document.write("<ul>");
    for (i = 0; i <= 4; i++) {
        document.write("<li>" + ary[i] + "</li>");
        sum = sum + ary[i];
    }
    document.write("</ul>");
    document.write("Total Sum:" + sum);


//Method-2
document.write("<h5>Basic Array-Method 2</h5>");

const b = new Array();

b[0] = 0;
b[1] = "Shyam";
b[2] = 1;

for (let i = 0; i < b.length; i++) {
   document.write("<li>" + b[i] + "</li>");
}
// Get value from user
const c = new Array(4);

for (let i = 0; i < c.length; i++) {
    c[i] = prompt("Enter the value: ");
}

for (let i = 0; i < c.length; i++) {
    document.write("<li>" + c[i] +"</li>");
}
document.write("</ul>");

//Multidimensional Arrays
document.write("<h5>Multidimensional Arrays</h5>");
var multi = [
    ["Harry",18,"Male","B.Com"],
    ["Sunny",19,"Male","BCA"],
    ["Sarah",18,"Male","BCA"],
    ["Tom",17,"Male","B.A."],
    ["Mac",17,"Male","B.A."]
  ];
  document.write("<table border='1px' cellspacing='0'>");
  for(var f = 0; f < 5; f++){
      document.write("<tr>");
    for(var s=0; s < 4; s++){
      document.write("<td>" + multi[f][s] + "</td>");
    }
    document.write("</tr>");
  }
    document.write("</table>");

// Modify Array
document.write("<h5>Modify Array</h5>");

var m = ["Harry",18,"Male","BCA"];
document.write(m + "<br>");
m[0] = "Sunny";
document.write(m + "<br>");
m[1] = 20;
document.write(m + "<br>");

//Delete Array
document.write("<h5>Delete Array</h5>");
var d = ["Harry",18,"Male","BCA"];
document.write(d + "<br>");
d[0] = "Sunny";
document.write(d + "<br>");
delete d[1];
document.write(d + "<br>");

//Sort
document.write("<h5>Sort</h5>");
var _st = ["Sanjay","Aman","Rehman","Karan"];  
document.write(_st + "<br><br>");
_st.sort();
document.write(_st);

//Reversing an Array
document.write("<h5>Reversing an Array</h5>");
var r = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(r + "<br><br>");
r.reverse();
document.write(r);

//pop
document.write("<h5>Pop</h5>");
var p = ["Sanjay", "Aman", "Rehman", "Karan"];
document.write(p + "<br><br>");
p.pop();
document.write(p);

//push
document.write("<h5>Push</h5>");
var pu = ["Sanjay", "Aman", "Rehman"];
pu.push("Rahul");
document.write(pu + "<br><br>");
pu.push("Salman");
document.write(pu + "<br><br>");

//Concat
document.write("<h5>Concat</h5>");
var con = ["Sanjay","Aman","Rehman"]; 
var cat = con.concat("Rahul","Karan");
document.write(cat);

document.write("<br>");
var con1 = ["Sanjay","Aman","Rehman"];
var con2 = ["Shyam","Karan"];
var final = con1.concat(con2);
document.write(final);

//join
document.write("<h5>Join</h5>");
var j1 = ["Aman","Rehman","Karan"];
var j2 = ["Shyam", "Sanjay"];
var j3 = j1.concat(j2);
document.write(j3 + "<br><br>");
var j4 = j3.join(" - ");
document.write(j4);

//Slice
document.write("<h5>Slice</h5>");
var s1 = ["Sanjay", "Ram", "Rehman","Shyam", "Karan"];
document.write(s1 + "<br><br>");
var s2 = s1.slice(1 , 4);
document.write(s2);

//splice
document.write("<h5>Splice</h5>");
var sp = ["Sanjay", "Aman", "Rehman", "Rahul"];
document.write(sp + "<br><br>");
sp.splice(2,0,"Nehal","Karan");
document.write(sp);

//isArray
document.write("<h5>isArray</h5>");
var is1 = ["ram", "shyam", "ghanshyam"];
document.write(is1 + "<br><br>");
var is2 = Array.isArray(is1);
document.write(is2);

document.write("<br>");
var is3 = ["ram", "shyam", "ghanshyam"];
    if(Array.isArray(is3)){
        document.write("This is an Array"); 
    }else{
        document.write("This is not an Array");  
    }


//IndexOf

document.write("<h5>indexOf</h5>");
const io = ["Sanjay", "Aman", "Rehman", "Rahul"];
document.write(io);
document.write("<br>");
const io2 = io.indexOf("Rehman",0);
document.write(io2);

//lastIndexOf

document.write("<h5>last indexOf</h5>");
const lio = ["Sanjay", "Aman", "Rehman", "Rahul"];
document.write(lio);
document.write("<br>");
const lio2 = lio.lastIndexOf("Rehman");
document.write(io2);

//Includes

document.write("<h5>Include</h5>");

const in1 = ["Sanjay", "Aman", "Rehman", "Rahul", "Nehal"];
document.write(in1);
document.write("<br>");

const in2 = in1.includes("Neha");
document.write(in2);
document.write("<br><br>");

const in3 = in1.includes("Aman");
document.write(in3);
document.write("<br><br>");

//Some

document.write("<h5>Some</h5>");

const ages = [14, 10 ,18, 20];
document.write(ages);
document.write("<br>");

const ages1 = ages.some(checkAdult);
document.write(ages1);

function checkAdult(age) {
    return age >= 18; 
}

//every

document.write("<h5>Every</h5>");

const age = [100, 60 ,18, 20];
document.write(ages);
document.write("<br>");

const age1 = age.every(checkAdult);
document.write(age1);

function checkAdult(ages) {
    return ages >= 18; 
}

//find

document.write("<h5>Find</h5>");

const age2 = [100, 60 ,18, 20];
document.write(age2);
document.write("<br>");

const age3 = age2.find(checkAdult);
document.write(age3);

function checkAdult(ages) {
    return ages >= 18; 
}

//find index

document.write("<h5>Find index</h5>");

const a1 = [14, 10 ,18, 20];
document.write(a1);
document.write("<br>");

const a2 = a1.findIndex(checkAdult);
document.write(a2);

function checkAdult(ages) {
    return ages >= 18; 
}

//filter

document.write("<h5>Filter</h5>");

const a3 = [14, 10 ,18, 20];
document.write(a3);
document.write("<br>");

const a4 = a3.filter(checkAdult);
document.write(a4);

function checkAdult(ages) {
    return ages >= 18; 
}

//toString

document.write("<h5>toString</h5>");

const toS = ["Sanjay", "Aman", "Rehman", "Rahul"];
toS.toString;
document.write(toS);

//fill

document.write("<h5>fill</h5>");

const toS1 = ["Sanjay", "Aman", "Rehman", "Rahul"];
toS1.fill("Shyam");
document.write(toS1);

//forEach

document.write("<h5>forEach</h5>");

const fE = ["Sanjay", "Aman", "Rehman", "Rahul"];

fE.forEach(function (value, index) {
    document.write(index + " : " +value + "<br>")
})


//-----------------------------------Finish Array--------------------------------------------------//


//------------------------------------------Math Methods-----------------------------------------------//

 /* Ceil Method Example */
 var value1 = Math.ceil(1.2);
 document.write(value1 + "<br>");

 /* Floor Method */
 var value2 = Math.floor(5.10);
 document.write(value2 + "<br>");

 /* Round Method */
 var value3 = Math.round(2.60);
 document.write(value3 + "<br>");

 /* Trunc Method */
 var value4 = Math.trunc(8.19);
 document.write(value4 + "<br>");

 /* Max Method */
 var value5 = Math.max(8, 10 ,2 ,50 ,25);
 document.write(value5 + "<br>");

 /* Min Method */
 var value6 = Math.min(8, 10, 2, 50, 25);
 document.write(value6 + "<br>");

 /* Sqrt Method */
 var value7 = Math.sqrt(64);
 document.write(value7 + "<br>");

 /* Cbrt Method */
 var value8 = Math.cbrt(125);
 document.write(value8 + "<br>");

 /*Pow Method */
 var value9 = Math.pow(2,3);
 document.write(value9 + "<br>");

 /*Random Method */
 var value10 = Math.floor(Math.random() * 10) + 1;
 document.write(value10 + "<br>");

 /*Abs Method */
 var value11 = Math.abs(5.25);
 document.write(value11 + "<br>");

 /*Pi Method */
 var value12 = Math.PI;
 document.write(value12 + "<br>");

