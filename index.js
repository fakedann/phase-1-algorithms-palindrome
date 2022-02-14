function isPalindrome(word) {
  // Write your algorithm here
  let count = parseInt(word.length/2, 10)
  let length = word.length-1;

  for( let i=0; i < count; i++){
    if (word[i] !== word[length]){
      return false
    }
    length--
  }
  return true

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  I use two variables that check the array from the beginning and the end. It's a quicker way to check the whole array. I divide the lenght by 2 and convert into an integer because words that even uneven number characters do no need to check the character that 'stays' in the middle, because it won't have a matching pair. You only need the check the two 'tails' of the word.
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
