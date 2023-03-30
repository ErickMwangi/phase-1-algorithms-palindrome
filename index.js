function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  for(let i = 0; i < len / 2; i ++ ){
    if(word[i] !== word[len - 1 - i]) {
      return false;
    }
  } 
  return true;
}

/* 
  Add your pseudocode here
  1. Initialize a variable called len that checks the string length

  2.Use a for loop to iterate through half of the word

  3.Check if first and last string are the same

  4.If they are, return "String is a palindrome"

  5.Else return "String is not a palindrome"
*/

/*
  Add written explanation of your solution here
  1. I first calculated the length of the input word and assign it to a constant variable called "len".

  2. I use a for loop through the string since checking  only half the word is enough to determine whether it is a palindrome or not.

  3. Then the function checks whether the character at the current index (i) is he same as the character at the opposite end of the word (len-1-i).

  4. if any pair of characters are the same, the function returns false indicating the word is not a palindrome.

  5. if all pairs of characters are the same, the function returns true indicating the word is a palindrome
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
