// Implementation of Circular queue (Ring Buffer)

// A circular queue, also known as a ring buffer, is a type of queue data structure where the last element is connected to the first element to form a circle. This arrangement allows efficient use of memory and provides better performance for certain scenarios compared to a regular linear queue.

class Queue {
  constructor(size) {
    this.queue = new Array(size)
    this.front = -1
    this.rear = -1
    this.size = size
  }

  isEmpty() {
    return this.front === -1
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front
  }

  enqueue(elem) {
    if (this.isFull()) {
      return 'Queue is full'
    }

    if (this.isEmpty()) {
      this.front = 0
    }

    this.rear = (this.rear + 1) % this.size
    this.queue[this.rear] = item
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    let elem = this.queue[this.front]
    if (this.front === this.rear) {
      this.front = -1
      this.rear = -1
    } else {
      this.front = (this.front + 1) % this.size
    }

    return elem
  }

  peek() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.queue[this.front]
  }
}

// The time complexity is O(1).
