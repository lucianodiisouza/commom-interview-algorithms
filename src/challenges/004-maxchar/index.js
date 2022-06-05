// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/***
 * baby steps:
 * iterate over the string
 * adding it to a new object
 * and counting the times thats this repeat itself
 */
function maxChar(str) {
  const chars = {}
  let maxChar = ''
  let maxCount = 0

  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1
    } else {
      chars[char]++
    }
  }

  // i have not considerated for do this `for in` loop
  // but is the only way to iterate throug an object,
  // basically, on this example, im passing through it
  // and cheking if theres some higher value than itself

  for (let char in chars) {
    if (chars[char] > maxCount) {
      maxCount = chars[char]
      maxChar = char
    }
  }

  return maxChar
}

// looking for the expert#1 solution, the approach was the same.
// but with small improvements, that does not change the solution
// i decided for no add it on this file.

module.exports = maxChar
