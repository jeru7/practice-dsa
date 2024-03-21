// Factorial of a Number
// The factorial of a non-negative integer 'n', denoted as n!, is the product of all positive integers less than or equal to 'n'.
// NOTE: Factorial of zero is 1.

// Problem:
// Give an integer 'n', find the factorial of that integer.

function recursiveFactorial(num) {
  if (num <= 1) {
    return 1
  }

  return recursiveFactorial(num - 1) * num
}

console.log(recursiveFactorial(5))

// The time complexity is O(n).
