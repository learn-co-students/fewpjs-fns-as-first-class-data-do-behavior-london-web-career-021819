/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
let time = timeString.split(':')[0]
if (time < 12) {
return "Good Morning"
} else if (time > 17 ) {
return "Good Evening"
} else {
return "Good Afternoon"
}
}

function displayMessage(greet) {
let message = document.querySelector('#greeting')
message.textContent = greet
}







/* Write your implementation of displayMessage() */
