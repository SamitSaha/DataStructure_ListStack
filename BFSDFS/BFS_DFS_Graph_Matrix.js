// Adjacency Matrix: 
// A 2D array where rows and columns represent vertices, 
// and each cell indicates whether there is an edge between two vertices.

// Suitable for:
// Dense graphs (many edges).
// Efficient edge lookup.

class GraphMatrix{
    constructor(vertices) {
        this.vertices = vertices // Number of Vertices
        this.adjMatrix = Array.from({length: vertices}, () =>
            Array(vertices).fill(0)
        );
    }
    addEdge(src, dest){
        this.adjMatrix[src][dest] = 1;
        this.adjMatrix[dest][src] = 1;
    }
    printGraph(){
        console.log("Adjacency Matrix:");
        this.adjMatrix.forEach(row => console.log(row.join(' ')));
    }

    //BFS
    bfs(start){
        const visited = Array(this.vertices).fill(false); // Track Visited nodes
        const queue = []; // // Queue for BFS traversal

        visited[start] = true;
        queue.push(start);

        console.log("BFS Traversal:");
        while(queue.length > 0){
            const vertex = queue.shift(); // Dequeue a vertex
            console.log(vertex); // Process the vertex
            
            // Check all neighbors of the current vertex
            for (let i = 0; i < this.vertices; i++) {
                if (this.adjMatrix[vertex][i] === 1 && !visited[i]) {
                    visited[i] = true; // Mark neighbor as visited
                    queue.push(i); // Enqueue the neighbor
                }
            }
        }
    }

    // DFS - Recursive
    dfs(start){
        const visited = Array(this.vertices).fill(false); // Track visited nodes
        console.log("DFS Traversal (Recursive):");
        this.dfsRecursive(start, visited);
    }
    dfsRecursive(vertex, visited) {
        visited[vertex] = true; // Mark the current node as visited
        console.log(vertex); // Process the vertex
        // Explore all neighbors of the current vertex
        for (let i = 0; i < this.vertices; i++) {
            if (this.adjMatrix[vertex][i] === 1 && !visited[i]) {
                this.dfsRecursive(i, visited); // Recursively visit the neighbor
            }
        }
    }

    // DFS - Iterative
    dfsIterative(start) {
        const visited = Array(this.vertices).fill(false); // Track visited nodes
        const stack = []; // Use stack for DFS
        console.log("DFS Traversal (Iterative):");

        // Start from the initial vertex
        stack.push(start);
        while (stack.length > 0) {
            const vertex = stack.pop(); // Pop from the stack
            if (!visited[vertex]) {
                visited[vertex] = true; // Mark as visited
                console.log(vertex); // Process the vertex
            
                // Push all unvisited neighbors onto the stack
                for (let i = this.vertices - 1; i >= 0; i--) {
                    if (this.adjMatrix[vertex][i] === 1 && !visited[i]) {
                        stack.push(i);
                    }
                }
            }
        }
    }

}

// Example Usage
const graph = new GraphMatrix(6);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(2, 4);
graph.addEdge(4, 3);
graph.addEdge(4, 5);
graph.printGraph();

graph.bfs(0); // Perform BFS starting from vertex 0
graph.dfs(0); // Perform DFS starting from vertex 0
graph.dfsIterative(0); // Perform DFS starting from vertex 0