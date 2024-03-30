// Palindrome Checker using Queue

// Problem: Write a function isPalindrome(word) that takes a string as input and returns true if the input word is a palindrome (reads the same forwards and backwards), and false otherwise. Implement the solution using a queue data structure.

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(elem) {
    this.items.push(elem)
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.items.shift()
  }

  front() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

function isPalindrome(str) {
  let queue = new Queue()
  let lowerCasedStr = str.toLowerCase().replace(/\W+/g, '')

  for (let i = lowerCasedStr.length - 1; i >= 0; i--) {
    queue.enqueue(lowerCasedStr[i])
  }

  for (let j = 0; j < lowerCasedStr.length; j++) {
    let reversedWordLetter = queue.dequeue()
    if (reversedWordLetter !== lowerCasedStr[j]) {
      return false
    }
  }

  return true
}

console.log(isPalindrome('racecar'))
console.log(isPalindrome('A man a plan a canal Panama'))
console.log(isPalindrome('hello'))

// The time complexity is O(n)
