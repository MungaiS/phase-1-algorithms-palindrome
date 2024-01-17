function isPalindrome(string) {
  // Write your algorithm here
  return string === string.split('').reverse().join('');

}

/* 
  Add your pseudocode here

  //Compare the string to its reverse and return true if they match, false otherwise

/*
 Function checks if the string is equal to its reverse. 
 This is done by splitting the string into an array of characters, reversing the array, and joining the characters back into a string.
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
