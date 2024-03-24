// Reverse a String

// Problem: Write a recursive function to reverse a string. For example, if the input string is "hello", the output should be "olleh".

function reverseString(word) {
  if (word.length <= 1) {
    return word
  }

  return reverseString(word.slice(1)) + word[0]
}

console.log(reverseString('hello'))

// The time complexity is O(n)
