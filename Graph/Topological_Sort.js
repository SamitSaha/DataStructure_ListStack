// // Topological Sort for a Directed Acyclic Graph (DAG) using Depth-First Search (DFS)

// class Graph {
//     constructor(vertices) {
//         this.vertices = vertices; // Number of vertices
//         this.adjList = new Map(); // Adjacency List
//     }

//     // Add a vertex to the graph
//     addVertex(vertex) {
//         this.adjList.set(vertex, []);
//     }

//     // Add a directed edge from src to dest
//     addEdge(src, dest) {
//         this.adjList.get(src).push(dest);
//     }

//     // Perform topological sort
//     topologicalSort() {
//         const visited = new Set(); // Keep track of visited vertices
//         const stack = []; // To store the topological order

//         // Helper function for DFS
//         const dfs = (vertex) => {
//             visited.add(vertex);

//             // Recur for all adjacent vertices
//             for (const neighbor of this.adjList.get(vertex)) {
//                 if (!visited.has(neighbor)) {
//                     dfs(neighbor);
//                 }
//             }

//             // Push the vertex to the stack after visiting all its neighbors
//             stack.push(vertex);
//         };

//         // Call the helper function for all vertices
//         for (const vertex of this.adjList.keys()) {
//             if (!visited.has(vertex)) {
//                 dfs(vertex);
//             }
//         }

//         // Reverse the stack to get the topological order
//         return stack.reverse();
//     }
// }

// // Example Usage
// const graph = new Graph(6);

// // Add vertices
// [0, 1, 2, 3, 4, 5].forEach(vertex => graph.addVertex(vertex));

// // Add edges
// graph.addEdge(5, 2);
// graph.addEdge(5, 0);
// graph.addEdge(4, 0);
// graph.addEdge(4, 1);
// graph.addEdge(2, 3);
// graph.addEdge(3, 1);

// // Perform topological sort
// console.log("Topological Sort:", graph.topologicalSort());


class Graph {
    constructor(vertices) {
        this.vertices = vertices; // Number of vertices
        this.adjList = new Map(); // Adjacency list
    }

    // Add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Add a directed edge to the graph
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
    }

    // Topological Sort
    topologicalSort() {
        const color = {}; // WHITE, GREY, BLACK
        const stack = []; // Stack to store the topological order
        const prev = {}; // Parent pointers

        // Initialize all vertices
        for (let v of this.adjList.keys()) {
            color[v] = "WHITE";
            prev[v] = null;
        }

        // Perform DFS for each unvisited vertex
        for (let u of this.adjList.keys()) {
            if (color[u] === "WHITE") {
                this.dfsVisit(u, color, stack);
            }
        }

        // Print the topological order (reverse of the stack)
        console.log("Topological Sort:");
        console.log(stack.reverse().join(" -> "));
    }

    // DFS Visit (Helper function for Topological Sort)
    dfsVisit(u, color, stack) {
        color[u] = "GREY"; // Mark the vertex as visited (in progress)

        for (let v of this.adjList.get(u)) {
            if (color[v] === "WHITE") {
                this.dfsVisit(v, color, stack);
            }
        }

        color[u] = "BLACK"; // Mark the vertex as finished
        stack.push(u); // Add the vertex to the stack
    }
}

// Example Usage
const graph = new Graph(6);

// Add vertices
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

// Add directed edges
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

// Perform Topological Sort
graph.topologicalSort();


