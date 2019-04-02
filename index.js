/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

/* It would be a good idea to make sure hour isn't less than 0 or greater
 * than 24...perhaps "throwing an Error" if one of these impossible cases
 * happens.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Throwing_a_generic_error */

function greet(timeString){
  time = parseInt(timeString.split(':')[0])
  if(time < 12){
    return 'Good Morning'
  }
  else if(time  > 12 && time < 17){
    return 'Good Afternoon'
  }
  else{
    return 'Good Evening'
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.querySelector("h1#greeting").textContent = string;
}
