// Topological Sort for a Directed Acyclic Graph (DAG) using Depth-First Search (DFS)

class Graph {
    constructor(vertices) {
        this.vertices = vertices; // Number of vertices
        this.adjList = new Map(); // Adjacency List
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    // Add a directed edge from src to dest
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
    }

    // Perform topological sort
    topologicalSort() {
        const visited = new Set(); // Keep track of visited vertices
        const stack = []; // To store the topological order

        // Helper function for DFS
        const dfs = (vertex) => {
            visited.add(vertex);

            // Recur for all adjacent vertices
            for (const neighbor of this.adjList.get(vertex)) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }

            // Push the vertex to the stack after visiting all its neighbors
            stack.push(vertex);
        };

        // Call the helper function for all vertices
        for (const vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                dfs(vertex);
            }
        }

        // Reverse the stack to get the topological order
        return stack.reverse();
    }
}

// Example Usage
const graph = new Graph(6);

// Add vertices
[0, 1, 2, 3, 4, 5].forEach(vertex => graph.addVertex(vertex));

// Add edges
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

// Perform topological sort
console.log("Topological Sort:", graph.topologicalSort());




