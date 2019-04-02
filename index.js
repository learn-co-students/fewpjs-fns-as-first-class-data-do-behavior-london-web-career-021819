/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
if (parseInt(time) < 12) {
  return "Good Morning"
} else if (parseInt(time) > 12 && parseInt(time) < 17) {
  return "Good Afternoon"
} else {
  return "Good Evening"
}
}
/* Write your implementation of greet() */

function displayMessage(msg) {
  document.getElementById("greeting").textContent = msg;
}

/* Write your implementation of displayMessage() */
