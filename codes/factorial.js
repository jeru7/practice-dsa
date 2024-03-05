// Factorial of a number
// In mathematics, the factorial of a non-negative integer 'n', denoted as n!, is the product of all positive integers less than or equal to 'n.' NOTE: Factorial of 0 is 1.

// Problem: Give an integer 'n', find the factorial of that integer.

function factorial(num) {
  let answer = 1

  for (let i = num; i > 1; i--) {
    answer *= i
  }

  return answer
}

console.log(factorial(5))

// The time complexity is O(n).
