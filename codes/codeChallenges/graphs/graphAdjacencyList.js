// Graph using Adjacency List

// This is a list of lists (or a dictionary of lists) where each element represents the neighbors of a node. This method is more memory-efficient for sparse graphs.

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!vertex) {
      return null //can throw error here
    }

    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(v1, v2) {
    if (!v1 || !v2) {
      return null //can throw error here
    }

    if (!this.adjacencyList[v1]) {
      this.addVertex(v1)
    }

    if (!this.adjacencyList[v2]) {
      this.addVertex(v2)
    }

    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(
        `${vertex} is connected to ${[...this.adjacencyList[vertex]]}`
      )
    }
  }

  printEdge(v1) {
    if (!this.hasEdge(v1)) {
      console.log(`No edges found connected to ${v1}`)
    } else {
      console.log(`${v1} has edges connected to ${[...this.adjacencyList[v1]]}`)
    }
  }

  checkEdge(v1, v2) {
    return !this.adjacencyList[v1].has(v2)
  }

  hasEdge(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log(`${vertex} is not a valid vertex`)
      return false // can throw error here
    }

    return !(this.adjacencyList[vertex].size === 0)
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')
graph.display()
graph.printEdge('A', 'B')
console.log(graph.hasEdge('X'))
