// Bubble Sort
// Compares adjacent elements and swaps them if they are in the wrong order, repeating until the list is sorted.

// Problem: Given an array of integers, sort the array.

function bubbleSort(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

// this can only be done with the flag "swapped" using do while loop.

console.log(bubbleSort([-6, 20, 8, -2, 4]))

// The time complexity is O(n^2)
