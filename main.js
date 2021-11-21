console.log("Hello Earth");

let drink = "smoothie";
drink = "frappe";
console.log(drink);

// var age = prompt("What is your age?");
// document.getElementById("title").innerHTML = age;

let number1 = 10;
console.log(number1);

console.log(number1 % 6);

let number2 = 10;
console.log(number2);

function fun() {
  console.log("this is a function");
}
fun();

function greeting(name) {
  let result = "Hello " + name;
  console.log(result);
}

// let yourName = prompt("What is your name?");
// greeting(yourName);

function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

sum(30, 10);

/* let num = 70;

while (num < 100) {
  num += 1;
  console.log(num);
}
*/

for (let num = 0; num <= 20; num++) {
  console.log(num);
}

/* Data types
number, string, object, boolean, array, null, undefined
*/

let fruit = "banana";
console.log(fruit.toUpperCase());

// Array
let fruits = ["apple", "orange", "grapes"];
let vegetables = ["carrot", "squash", "eggplant"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits);
console.log(fruits.toString());
console.log(fruits.join(" - "));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push("manggo"), fruits); // appends
console.log((fruits[3] = "papaya"), fruits);
console.log(fruits.shift(), fruits); // removes first item
console.log(fruits.unshift("kiwi"), fruits); // change first element

let groceries = fruits.concat(vegetables);
console.log(groceries);
console.log(groceries.slice(1, 4));
console.log(groceries.reverse());
console.log(groceries.sort());

let numbers = [5, 10, 2, 30, 22, 35, 2, 70, 100];
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
); // sorted in ascending

let emptyArray = [];
for (let num = 0; num <= 10; num++) {
  emptyArray.push(num);
}
console.log(emptyArray);

let student = {
  firstName: "Don",
  lastName: "Usbal",
  age: 17,
  height: 170,
  studentInfo: function () {
    return this.firstName + " " + this.lastName + " " + this.age;
  },
};
// console.log(student.firstName);
// console.log(student.lastName);
// student.firstName = "Forrest";
// console.log(student.firstName);
// student.age++;
// console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
var age = 18;

if (age >= 18 && age <= 35) {
  status = "target audience";
  console.log(status);
} else {
  status = "not my audience";
  console.log(status);
}

// Switch statement (determine if weekday or weekend)
switch (7) {
  case 0:
    text = "Weekend";
    break;
  case 7:
    text = "Weekend";
    break;

  default:
    text = "Weekday";
}
console.log(text);

// If else statement (determine if weekday or weekend)
let day = 1;

if (day == 0 || day == 7) {
  status = "Weekend - beer nights";
  console.log(status);
} else if (
  day == 1 ||
  day == 2 ||
  day == 3 ||
  day == 4 ||
  day == 5 ||
  day == 6
) {
  status = "Weekday - working";
  console.log(status);
} else {
  status = "Not a day in a week";
  console.log(status);
}
