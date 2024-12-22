// Adjacency List: 
// An array or map where 
// each index corresponds to a vertex and contains 
// a list of all its adjacent vertices.

// Suitable for:
// Sparse graphs (few edges).
// Space efficiency.

class GraphList {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src); // For undirected graphs
    }

    printGraph() {
        console.log("Adjacency List:");
        for (const [vertex, edges] of this.adjList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }

    // Iterative BFS
    bfs(start) {
        const visited = new Set();
        const queue = [start];
        console.log("BFS Traversal:");

        while (queue.length > 0) {
            const vertex = queue.shift(); // Dequeue a vertex
            if (!visited.has(vertex)) {
                console.log(vertex); // Visit the vertex
                visited.add(vertex); // Mark as visited

                // Enqueue all unvisited neighbors
                this.adjList.get(vertex).forEach(neighbor => {
                    if (!visited.has(neighbor)) queue.push(neighbor);
                });
            }
        }
    }

    // Iterative DFS
    dfs(start) {
        const visited = new Set();
        const stack = [start];
        console.log("DFS Traversal:");

        while (stack.length > 0) {
            const vertex = stack.pop(); // Pop a vertex from the stack
            if (!visited.has(vertex)) {
                console.log(vertex); // Visit the vertex
                visited.add(vertex); // Mark as visited

                // Push all unvisited neighbors onto the stack
                this.adjList.get(vertex).forEach(neighbor => {
                    if (!visited.has(neighbor)) stack.push(neighbor);
                });
            }
        }
    }
}

// Example Usage
const graph = new GraphList();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.printGraph();

// Perform BFS traversal
graph.bfs(0);

// Perform DFS traversal
graph.dfs(0);