// Find the Maximum and Minimum value that are present in Binary Search Tree

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return !this.root
  }

  insert(value) {
    let node = new Node(value)
    if (!this.root) {
      this.root = node
    } else {
      return this.insertNode(this.root, node)
    }
  }

  insertNode(parent, child) {
    if (child.value <= parent.value) {
      if (!parent.left) {
        parent.left = child
      } else {
        return this.insertNode(parent.left, child)
      }
    } else {
      if (!parent.right) {
        parent.right = child
      } else {
        return this.insertNode(parent.right, child)
      }
    }
  }

  min(node = this.root) {
    if (node.left) {
      return this.min(node.left)
    }
    return node.value
  }

  max(node = this.root) {
    if (node.right) {
      return this.max(node.right)
    }

    return node.value
  }
}
