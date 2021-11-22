function ageInDays() {
  let currentDateTime = new Date();
  let birthYear = prompt("What year you were born?");
  let ageInDaysCal = (currentDateTime.getFullYear() - birthYear) * 365;
  let h1 = document.createElement("h1");
  let textResult = document.createTextNode(
    `You are approximately ${ageInDaysCal} days old!`
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textResult);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

/* console
let currentDateTime = new Date();
let ageInDays = (currentDateTime.getFullYear() - birthYear) * 365;
console.log(`You are approximately ${ageInDays} days old now!`);
*/
