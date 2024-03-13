// Quick sort
// Selects a pivot element, partitions the input list into two subarrays based on the pivot, recursively sorts each subarray, and then combines them to produce the final sorted list.

// Problem: Given an array of integers, sort the array.

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    // if the pivot is the middle index, we can add a condition here that if i is equal to the pivot's index, skip it and continue the iteration.

    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-6, 20, 10, -2, 4]))

// The time complexity is O(n^2) - WORSE, O(nlogn) - AVERAGE
