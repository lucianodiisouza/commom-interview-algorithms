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

// expert solution #1 - cleaning up code
function reverseB(str) {
  return str.split('').reverse().join('')
}

// expert solution #2 - without use a reverse method
// create a string called reverse
// for each characted existant in this string
// |> take the char and add it to start of reversed var
// return the reversed variable

function reverseC(str) {
  let reverse = ''

  //   with the old for syntax
  //   for (let i = 0; i < str.length; i++) {
  //     reverse = str[i] + reverse
  //   }

  //   with the new es5 syntax
  for (char of str) {
    reverse = char + reverse
  }

  return reverse
}

/**
 * turn string into an array
 * use reduce method, passing a fn as callback, and
 * initial value after it.
 * inside the callback function, we will receive a temporary variable
 * called reversed, and the iterated char,
 * just returning it
 */

function reverseD(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse
