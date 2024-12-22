// Weighted graph with Edge List 
//Weighted: Edges have weights specified during addition.
//Undirected: Connections are bidirectional.

// Suitable for:
// Storing weighted graphs.
// Performing specific edge-related operations.

class GraphEdgeList{
    constructor(){
        this.edges=[]; // Store edges in the graph
    }

    // Add an edge between src and dest with an optional weight
    addEdge(src, dest, weight=1){
        this.edges.push({src, dest, weight});
    }
    // Print the edges in the graph
    printGraph(){
        console.log("Edge List: ");
        this.edges.forEach(edge =>
            console.log(`(${edge.src} -> ${edge.dest}, weight: ${edge.weight})`)
        );
    }
    // Convert edge list to adjacency list
    toAdjacencyList() {
        const adjList = new Map();
        for(const edge of this.edges){
            if(!adjList.has(edge.src))
                adjList.set(edge.src, []);
            if (!adjList.has(edge.dest))
                adjList.set(edge.dest, []); // Optional for undirected graph
            adjList.get(edge.src).push(edge.dest);
            adjList.get(edge.dest).push(edge.src); // Comment this line for directed graphs
        }
        return adjList;
    }
    bfs(start) {
        const adjList = this.toAdjacencyList(); // Convert to adjacency list
        const visited = new Set();
        const queue = [start];
    
        console.log("BFS Traversal:");
        while (queue.length > 0) {
            const vertex = queue.shift(); // Dequeue a vertex
            if (!visited.has(vertex)) {
                console.log(vertex); // Print the vertex
                visited.add(vertex); // Mark it as visited
                adjList.get(vertex)?.forEach(neighbor => {
                    if (!visited.has(neighbor)) queue.push(neighbor); // Enqueue unvisited neighbors
                });
            }
        }
    }

    // Perform iterative DFS
    dfsIterative(start) {
        const adjList = this.toAdjacencyList(); // Convert to adjacency list
        const visited = new Set();
        const stack = [start];

        console.log("DFS Iterative Traversal:");
        while (stack.length > 0) {
            const vertex = stack.pop(); // Pop a vertex from the stack
            if (!visited.has(vertex)) {
                console.log(vertex); // Visit the vertex
                visited.add(vertex); // Mark it as visited
                // Push all unvisited neighbors onto the stack
                adjList.get(vertex)?.forEach(neighbor => {
                    if (!visited.has(neighbor)) stack.push(neighbor);
                });
            }
        }
    }
}

const graph = new GraphEdgeList();
// graph.addEdge(0, 1, 5);
// graph.addEdge(1, 2, 10);
// graph.addEdge(2, 3, 2);

graph.addEdge(0, 1, 50);
graph.addEdge(0, 2, 60);
graph.addEdge(2, 4, 20);
graph.addEdge(4, 3, 70);
graph.addEdge(4, 5, 40);

// Print the edge list
graph.printGraph();

console.log("Adjacency List:");
console.log(graph.toAdjacencyList()); // Debugging: Print adjacency list
graph.bfs(0);
// Perform DFS Iterative traversal
graph.dfsIterative(0);