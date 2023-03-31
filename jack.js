//Is there a better way to do this? Probably

let clicks = 0;
let uniqueClicks = [];

//This code adds a click event listener to the image element and calls trackClick()
function trackClick() {
  clicks++;
  if (!uniqueClicks.includes(getCurrentUserId())) {
    uniqueClicks.push(getCurrentUserId());
  }
  console.log(`Total clicks: ${clicks}`);
  console.log(`Unique clicks: ${uniqueClicks.length}`);
}
//getCurrentUserId() function retrieves the user ID from a cookie, or generates a new user ID and sets it in a cookie if one doesn't exist

function getCurrentUserId() {
  let userId = getCookie('userId');
  if (!userId) {
    userId = generateUserId();
    setCookie('userId', userId);
  }
  return userId;
}
// The getCookie() and setCookie() functions are helper functions for reading and setting cookies.

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
}

function setCookie(name, value) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookieString;
}

function generateUserId() {
	//This function generates a unique ID by concatenating the current timestamp (in milliseconds) with a random number between 0 and 999,999
  const timestamp = new Date().getTime().toString();
  const randomNumber = Math.floor(Math.random() * 1000000).toString();
  return timestamp + randomNumber;
}