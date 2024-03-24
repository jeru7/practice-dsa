// Cartesian product
// A mathematical operation that combines elements from multiple sets to create a new set. It results in all possible combinations of elements from the input sets.
// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted A x B, is the set of all ordered pairs (a, b) where a is in A and b is in b.

// Problem: Given two finite non-empty sets, find their cartesian product.

function cartesianProduct(first, second) {
  let finalArr = []
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      let tempArr = []
      tempArr.push(first[i])
      tempArr.push(second[j])
      finalArr.push(tempArr)
    }
  }
  return finalArr
}

console.log(cartesianProduct([1, 2], ['a', 'b']))

// The time complexity is O(n^2) is both array's length is equal, but if the two array has a different length then the time complexity is O(mn) where 'm' is the length of the first array and 'n' is the length of the second array.
