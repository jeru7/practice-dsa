// Word Frequency

// Problem: Write a function that takes in a sentence (as a string) and returns a map where the keys are words in the sentence, and the values are the frequencies of those words in the sentence. Ignore case sensitivity and punctuation.

function wordFrequency(word) {
  let filteredWord = word.toLowerCase().split(/\W+/)

  let wordCount = new Map()

  for (const word of filteredWord) {
    if (word) {
      const count = wordCount.get(word) || 0
      wordCount.set(word, count + 1)
    }
  }
  return wordCount
}

console.log(wordFrequency('Hello world! Hello JavaScript!'))

// The time complexity is O(n), where n is the number of characters since we use the toLowerCase().
