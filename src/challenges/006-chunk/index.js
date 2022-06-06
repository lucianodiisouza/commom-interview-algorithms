// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = []

  for (el of array) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([el])
    } else if (last.length < size) {
      last.push(el)
    }
  }

  /***
   * i have brutally failed at my first try on this,
   * but i will try do describe the items for better understanding about
   * what is happening in here
   */

  // all my tries, consists in create a temp and a chunked array
  // iteranting over the received array, while this does not have the size asked
  // and when it reach the size, go to the next,
  // but, by any reason that i've not understood,
  // the items was reapeating itself

  //   for (element of array) {
  //     if (array.indexOf(element) < size) {
  //       temp.push(array[element])
  //     } else {
  //       chunked.push(temp)
  //       temp.length = 0
  //     }
  //   }
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < size; j++) {
  //       if (i < size) {
  //         temp.push(array[i])
  //       } else {
  //         chunked.push(temp)
  //       }
  //     }
  //   }
  return chunked
}

/***
 * at this chunkB function, the approach is use the while loop
 * iterating through the array, using the comparison (index > array.length)
 * pushing a new array, created with array.slice(i, size) where size, is not the
 * pretended size, but the that will be used as a limit for the iterator
 * theres a trick here, cause we neet do pass the index+size to the slice method,
 * but we need to update the index variable, making a sum that returns index + size,
 * to reiterate only over non-pushed itens
 */
function chunkB(array, size) {
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

module.exports = chunk
