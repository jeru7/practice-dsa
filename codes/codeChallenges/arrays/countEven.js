// Count Even Numbers in an Array

// Problem: Write a function that takes an array of numbers as input and returns the count of even numbers in the array.

function countEven(arr) {
  let totalCount = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      totalCount++
    }
  }

  return totalCount
}

console.log(countEven([3, 7, 2, 9, 1, 5, 6, 8]))

// The time complexity is O(n)
