// Implement the optimized queue

class Queue {
  constructor() {
    this.items = {}
    this.front = 0
    this.end = 0
  }

  enqueue(elem) {
    this.items[this.end] = elem
    this.end++
  }

  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  peek() {
    return this.items[this.front]
  }

  isEmpty() {
    return this.end - this.front === 0
  }

  size() {
    return this.end - this.front
  }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.enqueue(50)
queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue)

// This implementation of queue is more optimized than the other one since it doesnt use .shift() method as it has a time complexity of O(n) whereas this implementation has a time complexity of O(1). The downside is at some point it will use more memory since it uses an object instead of an array.
