// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/***
 * convert the number in string > array > revert it and join it again
 * check the sign of the number (if is positive or negative // 0)
 * return the reversed number, and his sign, following the testcases above
 *
 */

function reverseInt(n) {
  const reversedNumber = n.toString().split('').reverse().join('')

  const sign = Math.sign(n)

  return parseInt(reversedNumber) * sign
}

// expert solution#1 (looks much similar for my solution :D )
function reverseIntB(n) {
  const reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt
