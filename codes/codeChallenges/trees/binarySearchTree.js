class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }

  isLeaf() {
    return !this.right && !this.left
  }

  isInternal() {
    return !this.isLeaf()
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
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

  search(root, value) {
    if (!root) {
      return false
    } else {
      if (value === root.value) {
        return true
      } else if (value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  isEmpty() {
    return !this.root
  }
}
