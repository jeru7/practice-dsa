// Prime Number
// A prime number is a natural number that is greater than 1 that is not a product of two smaller natural numbers.

// Problem: Give a natural number 'n', determine if the number is prime or not.

function isPrime(num) {
  if (num % 2 === 0 || num <= 1) {
    return false
  }

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

console.log(isPrime(1))

// The time complexity is O(n)
