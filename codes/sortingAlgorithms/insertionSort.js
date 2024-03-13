// Insertion Sort
// Builds the final sorted list one item at a time by repeatedly taking the next item and inserting it into its correct position in the already-sorted portion of the list.

// Problem: Given an array of integers, sort the array.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numChecker = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > numChecker) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = numChecker
  }

  return arr
}

console.log(insertionSort([-6, 20, 10, -2, 4]))

// The time complexity is O(n^2)
