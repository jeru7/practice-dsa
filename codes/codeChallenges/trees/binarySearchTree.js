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
    if (value <= this.value) {
      if (!this.left) {
        return (this.left = new TreeNode(value))
      } else {
        return this.left.addChild(value)
      }
    } else {
      if (!this.right) {
        return (this.right = new TreeNode(value))
      } else {
        return this.right.addChild(value)
      }
    }
  }
}

class BinarySearchTree {
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
