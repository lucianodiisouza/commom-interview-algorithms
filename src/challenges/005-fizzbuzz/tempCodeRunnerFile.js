function fizzBuzz(n) {
  // iterate over the n number, and print it to console
  for (let i = 0; i < n; i++) {
    // if i value mod 3 === 0 && mod 5 === 0 prints fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
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

fizzBuzz(15)