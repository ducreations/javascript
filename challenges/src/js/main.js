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

function generateCat() {
  document.getElementById("cat-images").appendChild(newCatImage());
}

function newCatImage() {
  const image = document.createElement("img");
  image.src = `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&any=${Date.now()}`;

  return image;
}

function rpsGame(yourChoice) {
  let humanPick, botPick;

  humanPick = yourChoice.id;
  console.log("Your pick:", humanPick);

  botPick = ChoiceToNum(randNum());
  console.log("Computer pick:", botPick);

  result = decideWinner(humanPick, botPick);
  console.log(result);

  message = finalMessage(result);
  console.log(message);

  rpsFrontEnd(yourChoice.id, botPick, message);
}

function randNum() {
  return Math.floor(Math.random() * 3);
}

function ChoiceToNum(number) {
  return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, botPick) {
  let rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { scissors: 0, rock: 1, paper: 0.5 },
    scissors: { scissors: 0.5, rock: 0, paper: 1 },
  };

  let yourScore = rpsDatabase[yourChoice][botPick];
  let botScore = rpsDatabase[botPick][yourChoice];

  return [yourScore, botScore];
}

function finalMessage([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "You lost", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "Tied", color: "#FCF55F" };
  } else {
    return { message: "You won!", color: "yellowgreen" };
  }
}

function rpsFrontEnd(yourPickImage, botPickImage, finalMessage) {
  let imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let yourDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let messageDiv = document.createElement("div");

  yourDiv.innerHTML =
    "<img src='" +
    imagesDatabase[yourPickImage] +
    "' height=150 width=150 style='box-shadow: 0px 6px 50px rgba(80, 100, 255, 1)' />";

  messageDiv.innerHTML =
    "<h1 style='color: " +
    finalMessage.color +
    "; font-size: 60px; padding: 30px; '>" +
    finalMessage.message +
    "</h1>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botPickImage] +
    "' height=150 width=150 style='box-shadow: 0px 6px 50px rgba(255, 75, 50, 1)' />";

  document.getElementById("rps-flexbox-result").appendChild(yourDiv);
  document.getElementById("rps-flexbox-result").appendChild(messageDiv);
  document.getElementById("rps-flexbox-result").appendChild(botDiv);
}

/* console version of challenge 1: convert your age in days
let currentDateTime = new Date();
let ageInDays = (currentDateTime.getFullYear() - birthYear) * 365;
console.log(`You are approximately ${ageInDays} days old now!`);
*/
