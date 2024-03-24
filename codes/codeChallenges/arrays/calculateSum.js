// Calculate the total Sum of Array Elements

// Problem: Write a function that takes an array of numbers as input and returns the sum of all elements in the array.

function calculateSum(arr) {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }

  return total
}

console.log(calculateSum([2, 3, 4, 5]))

// The time complexity is O(n)
