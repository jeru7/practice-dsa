// Delete a node in a Binary Search Tree

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

  delete(value, node = this.root) {
    if (node === null) {
      return null
    }
    if (value < node.value) {
      node.left = this.delete(value, node.left)
    } else if (value > node.value) {
      node.right = this.delete(value, node.right)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      }
      node.value = this.min(node.right)
      node.right = this.delete(node.value, node.right)
    }
    return node
  }
}
