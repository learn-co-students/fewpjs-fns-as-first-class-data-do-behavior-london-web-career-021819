/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


function greet(timeS) {
  const x = parseInt(timeS, ); // not sure about the 2nd argument - parseInt converts strings to numbers?
  if (x < 12 ) return 'Good Morning'
  if (x > 12 && x < 17) return "Good Afternoon"
  if (x > 5) return "Good Evening"
}

function displayMessage(display) {
  document.getElementById('greeting').textContent = display
}





//
// function greet() {

//   }
// }



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
