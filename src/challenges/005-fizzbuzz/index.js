// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // iterate over the 1 to n number, and print it to console
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      // if i value mod 3 === 0 prints fizz
      console.log('fizz')
    } else if (i % 5 === 0) {
      // if i value mod 5 === 0 prints buzz
      console.log('buzz')
    } else {
      // else print the i
      console.log(i)
    }
  }
}

// experts solution#1
/***
 * looking for an expert solution, hes using the same approach,
 * i think i can interpolate some nested ternary operation here
 * but, maybe we lost the readability of the code.
 */

module.exports = fizzBuzz
