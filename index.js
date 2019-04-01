/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet (time) {
  let hour = time.split(':')[0];
if (hour < 12) {
	return 'Good Morning'; }
if (hour >= 12 && hour <= 17) {
	return 'Good Afternoon'; }
return 'Good Evening'
}

function displayMessage(input) {
  let el = document.getElementById("greeting");
  el.textContent = input;
}
