// function dfs(u, color, colors, adj){


//     // Assign color to the current u
//     colors[u] = color;

//     // Iterate through all adjacent vertices
//     for (let v of adj[u]) {
//         if (colors[v] === -1) {
        
//             // Assign alternate color to the adjacent u
//             if (!dfs(v, 1 - color, colors, adj))
//                 return false;
//         }
//         else if (colors[v] === color) {
        
//             // If the adjacent u has the same color, it's
//             // not bipartite
//             return false;
//         }
//     }
//     return true;
// }

// // Function to check if the graph is Bipartite using DFS
// function isBipartite(V, adj){

//     // Initialize all vertices as uncolored
//     const colors = Array(V).fill(-1);

//     // Check each component of the graph
//     for (let i = 0; i < V; i++) {
    
//         // If the vertex is uncolored
//         if (colors[i] === -1) {
        
//             // If DFS fails, the graph is not bipartite
//             if (!dfs(i, 0, colors, adj))
//                 return false;
//         }
//     }

//     // All vertices can be colored bipartitely
//     return true;
// }

// // Driver Code

// // Graph Structure:
// // 0 - 1
// // |   |
// // 3 - 2
// const V = 4;
// const adj = Array.from({length : V}, () => []);

// // Adding edges (undirected)
// adj[0].push(1);
// adj[1].push(0);
// adj[1].push(2);
// adj[2].push(1);
// adj[2].push(3);
// adj[3].push(2);
// adj[3].push(0);
// adj[0].push(3);

// if (isBipartite(V, adj))
//     console.log("true");
// else
//     console.log("false");

class GraphList {
    constructor() {
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        this.adjList.set(vertex, []);
    }

    // Add an edge between src and dest
    addEdge(src, dest) {
        this.adjList.get(src).push(dest);
        this.adjList.get(dest).push(src); // For undirected graphs
    }

    // Print the adjacency list
    printGraph() {
        console.log("Adjacency List:");
        for (const [vertex, edges] of this.adjList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }

    // Check if the graph is bipartite using DFS
    isBipartite() {
        const colors = new Map(); // Map to store colors of vertices

        for (const vertex of this.adjList.keys()) {
            // If a vertex is not already in the colors map (unvisited), 
            // the method calls dfsCheck on that vertex, starting with color 0.
            if (!colors.has(vertex)) {
                // If any component of the graph fails the bipartite check (returns false), 
                // the entire graph is declared not bipartite, and the method exits.
                if (!this.dfsCheck(vertex, 0, colors)) {
                    return false; // If any component is not bipartite
                }
            }
        }
        return true; // All components are bipartite
    }

    // DFS check for bipartiteness
    dfsCheck(vertex, currentColor, colors) {
        colors.set(vertex, currentColor); // Assign the current color to the vertex

        for (const neighbor of this.adjList.get(vertex)) {
            if (!colors.has(neighbor)) {
                // Recursively color the neighbor with the opposite color
                if (!this.dfsCheck(neighbor, 1 - currentColor, colors)) {
                    return false;
                }
            } else if (colors.get(neighbor) === currentColor) {
                // If the neighbor has the same color, the graph is not bipartite
                return false;
            }
        }

        return true; // No conflicts found in this component
    }
}

// Example Usage
const graph = new GraphList();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);

// Add edges
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 0);

graph.printGraph();
console.log("Is the graph bipartite?", graph.isBipartite());

// Test with another input
const graph2 = new GraphList();
graph2.addVertex(0);
graph2.addVertex(1);
graph2.addVertex(2);
graph2.addVertex(3);
graph2.addVertex(4);

// Add edges
graph2.addEdge(0, 1);
graph2.addEdge(1, 2);
graph2.addEdge(2, 3);
graph2.addEdge(3, 4);

graph2.printGraph();
console.log("Is the graph bipartite?", graph2.isBipartite());



