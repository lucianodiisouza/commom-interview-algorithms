// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 *  step 1 - turn this in an array
 *  step 2 - reverse it
 *  step 3 - join all array items
 *  step 4 - return a boolean value
 * 
 */
function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  return reversed === str
}



module.exports = palindrome
