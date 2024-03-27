// Counting Characters

// Problem: Given a string, create a function that counts the frequency of each character and returns a Map with characters as keys and their counts as values.

function countCharacters(word) {
  let count = new Map()

  for (const item of word) {
    if (count.has(item)) {
      count.set(item, count.get(item) + 1)
    } else {
      count.set(item, 1)
    }
  }

  return count
}

console.log(countCharacters('hello'))

// The time complexity O(n) where n is the number of characters of the string
