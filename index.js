/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById("time").value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let stringTime = time.split(":")[0];
  if (stringTime < 12) {
    return "Good Morning";
  } else if (stringTime >= 12 && stringTime <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let greetingEl = document.getElementById("greeting");
  greetingEl.textContent = message;
}
