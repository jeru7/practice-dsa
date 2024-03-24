// Fibonacci Sequence
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. The first two numbers in the sequence are 0 and 1.

// Problem: Give a number 'n', find the first 'n' elements of the Fibonacci sequence.

function fibonacci(num) {
  let arr = [0, 1]

  if (num === 0) {
    return console.log([])
  }

  if (num === 1) {
    return console.log([0])
  }

  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }

  console.log(arr)
}

fibonacci(7)

// The time complexity is O(n).
