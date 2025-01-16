
class Graph {
    constructor(vertices) {
        this.vertices = vertices; // Number of vertices
        this.adjList = new Map(); // Adjacency list
        this.time = 0; // Time tracker for discovery and finishing times
    }

    // Add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Add an edge to the graph (Directed)
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
    }

    // DFS algorithm
    dfs() {
        // Initialize data structures
        const color = {}; // WHITE, GREY, BLACK
        const prev = {}; // Parent pointers
        const discovery = {}; // Discovery time
        const finish = {}; // Finish time

        // Initialize all vertices
        for (let v of this.adjList.keys()) {
            color[v] = "WHITE";
            prev[v] = null;
            discovery[v] = Infinity;
            finish[v] = Infinity;
        }

        // Perform DFS for each unvisited vertex
        for (let u of this.adjList.keys()) {
            if (color[u] === "WHITE") {
                this.dfsVisit(u, color, prev, discovery, finish);
            }
        }

        // Print discovery and finish times
        console.log("Vertex  Discovery  Finish  Parent");
        for (let v of this.adjList.keys()) {
            console.log(`${v}\t   ${discovery[v]}\t   ${finish[v]}\t   ${prev[v]}`);
        }
    }

    // DFS Visit (Helper function)
    dfsVisit(u, color, prev, discovery, finish) {
        color[u] = "GREY"; // Mark the vertex as visited
        this.time++;
        discovery[u] = this.time; // Record discovery time

        for (let v of this.adjList.get(u)) {
            if (color[v] === "WHITE") {
                prev[v] = u; // Set parent
                this.dfsVisit(v, color, prev, discovery, finish);
            }
        }

        color[u] = "BLACK"; // Mark the vertex as finished
        this.time++;
        finish[u] = this.time; // Record finish time
    }

    // Print the adjacency list
    printGraph() {
        for (let [vertex, neighbors] of this.adjList) {
            console.log(`${vertex}: [${neighbors.join(", ")}]`);
        }
    }
}

// Example Usage
const graph = new Graph();

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
graph.addEdge(3, 4);
graph.addEdge(4, 5);

// Print the adjacency list
graph.printGraph();

// Perform DFS and display the results
graph.dfs();

