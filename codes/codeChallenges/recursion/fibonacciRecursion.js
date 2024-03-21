// Fibonacci Sequence - Recursion
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
// The first two numbers in the sequence are 0 and 1.

// Problem:
// Give a number 'n', find the nth element of the fibonacci sequence.

function recursiveFibonacci(num) {
  // base case
  if (num < 2) {
    return num
  }

  // recursive call
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2)
}

console.log(recursiveFibonacci(6))

// The time complexity is O(2^n)

// NOTE: The iterative solution is more efficient rather than using the recursive solution since the time complexity for the iterative solution is O(n).
