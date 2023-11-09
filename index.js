console.log("Hello World");

//window.alert("Hello World");

//a comment

/*
a comment
*/

//*var, let, const

let firstNameT = "Angel";
let lastNameT = "aaa";
let age;
let student = true;

age = 25;

age = age + 4;

console.log(age);
console.log(firstNameT);
console.log(student);

console.log(firstNameT + " is " + age + " years old.");

document.getElementById("p1").innerHTML =
  firstNameT + " is " + age + " years old.";
document.getElementById("p2").innerHTML =
lastNameT + " is " + age + " years old.";
document.getElementById("p3").innerHTML =
  firstNameT + " is " + age + " years old.";

//*arithmetic expressions

let students = 10;

students = students + 1;

let extraStudents = students++;

console.log(students);
console.log(extraStudents);

//*window prompt easy way approach

//let username = window.prompt("Enter your name.");
//console.log(username);

//*difficult approach below

let firstName;
let lastName;

document.getElementById("myButton").onclick = function () {
  firstName = document.getElementById("fname").value;
  lastName = document.getElementById("lname").value;

  console.log(firstName + " " + lastName);
  document.getElementById("textHere").innerHTML = firstName + " " + lastName;
};

//*type conversion

let x;
let y;
let z;

x = Number("10");
y = String(10);
z = Boolean(10);

console.log(x, typeof x);

//*const can't be changed
//const PI = 3.14;
let PI = 3.14;
222;
let radius;
let circumference;

//radius = window.prompt("Enter the radius.");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is :" + circumference);

//*Math object

let xMath = 3.99;

xMath = Math.round(xMath);
// xMath = Math.ceil(xMath);
// xMath = Math.floor(xMath);
// xMath = Math.trunc(xMath);
// xMath = Math.sqrt(xMath);
// xMath = Math.pow(xMath, 2);
// xMath = Math.abs(xMath);
// xMath = Math.sin(xMath);
// xMath = Math.cos(xMath);
// xMath = Math.tan(xMath);
// xMath = Math.min(xMath);
// xMath = Math.max(xMath);
// xMath = Math.random();

console.log(xMath);

//* hypoteneuse formula right angle

// let a;
// let b;
// let c;

// a = window.prompt("Enter a");
// a = Number(a);
// b = window.prompt("Enter b");
// b = Number(b);

// //c = Math.hypot(a, b);
// console.log(c);

document.getElementById("myButton2").onclick = function () {
  let a;
  let b;
  let c;

  a = document.getElementById("aTextBox").value;
  a = Number(a);
  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.hypot(a, b);
  console.log(c);

  document.getElementById("cLabel").innerHTML = " Side C: " + c;
};
