// Reverse Queue

// Problem: Write a function reverseQueue(queue) that takes a queue as input and returns a new queue with the elements reversed.

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

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

function reverseQueue(queue) {
  let reversedQueue = new Queue()
  let size = queue.size()
  let temp = []

  for (let i = size - 1; i >= 0; i--) {
    temp[i] = queue.dequeue()
  }

  for (let j = 0; j < temp.length; j++) {
    reversedQueue.enqueue(temp[j])
  }

  return reversedQueue
}

console.log(reverseQueue(queue))
