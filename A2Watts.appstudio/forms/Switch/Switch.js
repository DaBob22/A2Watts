
let firstName = prompt("Enter your your first name:");
let state = prompt("Enter your state (two letters capitolized) :");
let temp = Number(prompt("Enter the current outside temperature (F):"));

let upperCaseFirstName = firstName.charAt(0).toUpperCase + firstName.slice(1);

let upperCaseState = state.toUpperCase();

let userArray = [upperCaseFirstName, upperCaseState, temp];

let messages = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you wont need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

switch (true) {

case(temp < 32 && upperCaseState === "NE"):
  console.log(`${firstName}, ${messages[0]}`)
  break;
case( temp >= 32 && temp <= 50 && upperCaseState ==="NE"):
  console.log(`${firstName}, ${messages[1]}`)
  break;
case( temp >= 32 && temp <= 50 && upperCaseState ==="FL"):
  console.log(`${firstName}, ${messages[2]}`)
  break;
case( temp > 50 && temp <= 70 && upperCaseState ==="FL"):
  console.log(`${firstName}, ${messages[3]}`)
  break;
default:
  console.log(`${firstName}, I do not know what you should wear`)
}




