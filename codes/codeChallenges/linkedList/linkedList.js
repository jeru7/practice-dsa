// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
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
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  insertLast(item) {
    let node = new Node(item)
    if (this.isEmpty()) {
      this.insertFirst(item)
    } else {
      let prev = this.head
      while (prev.next !== null) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  insertAtIndex(item, index) {
    if (index < 0 || index > this.size) {
      return 'Invalid index'
    }

    if (index === 0) {
      return this.insertFirst(item)
    } else {
      let node = new Node(item)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    } else {
      this.head = this.head.next
      this.size--
    }
  }
}
