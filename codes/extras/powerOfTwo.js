// Power of Two
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

// Problem: Give a positive iteger 'n', determine if the number is a power of 2 or not.

function isPowerOfTwo(num) {
  if (num < 1 || num % 2 !== 0) {
    return false
  }

  if (num === 1) {
    return true
  }

  while (num >= 2) {
    if (num === 2) {
      return true
    }

    num /= 2
  }
  return false
}

console.log(isPowerOfTwo(128))

// The time complexity is O(log(n))
