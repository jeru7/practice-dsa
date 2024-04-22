// Graph's Representation in Code

// Graps represent connections between nodes (vertices)using edges. They are versatile data structures used in network modeling, pathfinding algorithms, social networks, and more.

// Types of Graphs:
// Directed Graph (Digraph): Arrows show one-way connections between things.
// Undirected Graph: Just lines connecting things, no arrows. Connections go both ways.
// Weighted Graph: Each connection has a number on it, showing how "heavy" or "important" it is.
// Unweighted Graph: No numbers on connections. It's just about who's connected to who.
// Cyclic Graph: It's like a loop. You can follow connections and come back to where you started.
// Acyclic Graph: No loops allowed. Connections only go one way.
// Connected Graph: Everything is connected somehow. You can get from any point to any other point.
// Disconnected Graph: Some things aren't connected to others. It's like having separate islands of connections.
// Complete Graph: Everything is connected to everything else. It's like a big web where everyone knows everyone.
// Bipartite Graph: Things are split into two groups, and connections only go between the two groups, not within them.

// We use two ways to represent a graph (OOP representation is not included)
// Adjacency Matrix: This is a 2D array where each cell at position [i][j] represents whether there is an edge between node i and node j. This method is straightforward but can be memory-intensive, especially for sparse graphs.
// Adjacency List: This is a list of lists (or a dictionary of lists) where each element represents the neighbors of a node. This method is more memory-efficient for sparse graphs.

// Andjacency Matrix
// A-B-C
let graphMatrix = [
  [0, 1, 0], // A is connected to B
  [1, 0, 1], // B is connected to A and C
  [0, 1, 0], // C is connected to B
]

// Adjacency List
// A-B-C
let graphList = {
  A: ['B'], // A is connected to B
  B: ['A', 'C'], // B is connected to A and C
  C: ['B'], // C is connected to B
}
