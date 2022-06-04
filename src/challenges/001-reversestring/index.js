// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * steps:
 * 1 - convert str to array
 * 2 - reversr it using reverse() method available for arrays
 * 3 - use the join() method available for arrays, to turn it
 *   on a string again
 * 4 - return it
 */

// my solution
function reverse(str) {
  const arrStr = Array.from(str).reverse()

  return arrStr.join('')
}

module.exports = reverse
