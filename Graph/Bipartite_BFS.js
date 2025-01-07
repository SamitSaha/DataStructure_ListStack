// bipartite using Breadth-First Search (BFS)
// A graph is bipartite if its vertices can be divided into two sets 
// such that no two vertices within the same set are adjacent.

class GraphList{
    //Initializes the graph with an empty adjacency list stored in a Map.
    // Each vertex will map to an array of its neighboring vertices
    constructor(){
        this.adjList = new Map();
    }
    // Add vertex to the graph
    // Each vertex has a corresponding empty array to store its edges.
    addVertex(vertex){
        this.adjList.set(vertex, []);
    }
    // Add an edge between src and dest
    addEdge(src, dest){
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src); // For undirected graphs
    }
    // Print the adjacency list
    printGraph(){
        console.log("Adjacency List: \n");
        for( const [vertex, edges] of this.adjList){
            console.log(`${vertex} -> ${edges.join(', ')}`); // Iterates through each vertex and its corresponding list of edges.
        }
    }

    // Check if the graph is bipartite using BFS
    isBipartite() {
        const colors = new Map(); // Map to store colors of vertices
        for (const vertex of this.adjList.keys()) {
            if (!colors.has(vertex)) {
                if (!this.bfsCheck(vertex, colors)) {
                    return false; // If any component is not bipartite
                }
            }
        }
        return true; // All components are bipartite
    }

    // bfs check
    bfsCheck(start, colors) {
        const queue = [start]; // Implements the BFS algorithm to traverse the graph starting from start
        colors.set(start, 0); // Start coloring with 0

        while (queue.length > 0) {
            const vertex = queue.shift(); // Remove the first vertex from the queue
            const currentColor = colors.get(vertex); // Get the current vertex's color

            // For each neighbor of the current vertex (retrieved from the adjacency list), 
            // the algorithm checks the colors map to determine if it has been visited and colored.
            for (const neighbor of this.adjList.get(vertex)) {
                if (!colors.has(neighbor)) {
                    // Assign the opposite color to the neighbor
                    colors.set(neighbor, 1 - currentColor);
                    queue.push(neighbor); // // Add the neighbor to the queue for processing
                } else if (colors.get(neighbor) === currentColor) {
                    // If neighbor has the same color, the graph is not bipartite
                    return false;
                }
            }
        }
        return true;
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
graph.addEdge(3, 0);

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addVertex(5);
// graph.addEdge(0, 1);
// graph.addEdge(0, 3);
// graph.addEdge(1, 4);
// graph.addEdge(3, 5);
// graph.addEdge(4, 5);

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addVertex(3);
// graph.addVertex(4);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(3, 4);
// graph.addEdge(4, 0); // Odd-length cycle

// graph.addVertex(0);
// graph.addVertex(1);
// graph.addVertex(2);
// graph.addEdge(1, 0);
// graph.addEdge(1, 2);
// graph.addEdge(0, 2);
// graph.addEdge(2, 1);
// graph.addEdge(2, 0);

graph.printGraph();
console.log("Is the graph bipartite?", graph.isBipartite());