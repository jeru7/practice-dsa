// Merge sort
// Divides the input list into two halves, recursively sorts each half, and then merges the sorted halves to produce the final sorted list.

// Problem: Given an array of integers, sort the array.

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let middleIndex = Math.floor(arr.length / 2)
  let leftArray = arr.slice(0, middleIndex)
  let rightArray = arr.slice(middleIndex)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(left, right) {
  let tempArr = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      tempArr.push(left.shift())
    } else {
      tempArr.push(right.shift())
    }
  }

  return [...tempArr, ...left, ...right]
}

console.log(mergeSort([2, 5, 1, -2, 0]))

// The time complexity is O(nlogn)
