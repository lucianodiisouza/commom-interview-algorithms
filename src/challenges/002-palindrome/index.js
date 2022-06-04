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

// expert solution#1
/**
 * here we will convert the str onto an array
 * and in the array, we will use the every method, to
 * iterat inside the array, returning if the current char
 * iterated is equal to the inverted position item (str.length - index -1)
 * the index - 1, will be recalculated on every iteration
 */

function palindromeB(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1]
  })
}

module.exports = palindrome
