// Binary Tree Implementation using JavaScript

// Binary Tree - A binary tree is a type of tree data structure in which each node has at most two children, referred to as the left child and the right child.

class TreeNode {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }

  isRoot() {
    return !this.parent
  }

  isLeaf() {
    return !this.right && !this.left
  }

  isInternal() {
    return !this.isLeaf()
  }

  addChild(value) {
    if (!this.left) {
      return (this.left = new TreeNode(value))
    } else if (!this.right) {
      return (this.right = new TreeNode(value))
    } else {
      return this.left.addChild(value)
    }
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  addRoot(value) {
    if (this.root) {
      console.log('Root already exists')
      return
    }
    this.root = new TreeNode(value)
    return this.root
  }

  isEmpty() {
    return !this.root
  }
}
