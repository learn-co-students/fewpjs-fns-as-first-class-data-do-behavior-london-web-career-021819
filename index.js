/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  const numbers = timeString.split(':')
  const hours = parseInt(numbers[0])
  const minutes = parseInt(numbers[1])
  if (hours < 12 )
  {
    return "Good Morning"
  }
  else if (hours >= 12 && hours < 17) 
  {
    return "Good Afternoon"
  }
  else
  {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById('greeting').textCoinntntent = msg
}