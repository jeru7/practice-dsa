// Implement a doubly linkedlist data structure

// A doubly linked list is a type of linked list in which each node contains a reference to the next node and the previous node in the sequence. In contrast to a singly linked list, where each node only has a reference to the next node, a doubly linked list allows traversal in both forward and backward directions.

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  insertFirst(item) {
    let node = new Node(item)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  insertLast(item) {
    let node = new Node(item)
    if (this.isEmpty()) {
      return this.insertFirst(item)
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return null
    }

    this.head = this.head.next
    this.head.prev = null
    this.size--

    if (this.isEmpty()) {
      this.head = null
      this.tail = null
    }
  }

  deleteLast() {
    if (this.isEmpty()) {
      return null
    }

    this.tail = this.tail.prev
    this.tail.next = null
    this.size--

    if (this.isEmpty()) {
      this.head = null
      this.tail = null
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log('LinkedList is empty')
      return null
    } else {
      let curr = this.head
      let items = ''
      while (curr !== null) {
        items += `${curr.value} `
        curr = curr.next
      }
      console.log(items)
    }
  }
}

// Pros and Cons of Doubly Linkedlist:
// Pros: Bi-directional Traversal & Easier Deletion O(1)
// Cons: Memory Overhead & More Complex Implementation
