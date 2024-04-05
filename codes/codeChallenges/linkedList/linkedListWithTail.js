// LinkedList with tail

// a linked list with a tail provides efficient access to both the head and the tail of the list, making operations like inserting items at the end of the list faster compared to a standard singly linked list.

class Node {
  constructor(value) {
    this.value = value
    this.next = null
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
    if (this.isEmpty()) {
      this.head = item
      this.tail = item
    } else {
      item.next = this.head
      this.head = item
    }

    this.size++
  }

  insertLast(item) {
    if (this.isEmpty()) {
      return this.insertFirst(item)
    } else {
      this.tail.next = item
      this.tail = item
    }
    this.size++
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    } else if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
    this.size--
  }

  deleteLast() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    } else if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head
      while (prev.next !== this.tail) {
        prev = prev.next
      }
      prev.next = null
      this.tail = prev
    }
    this.size--
  }
}
