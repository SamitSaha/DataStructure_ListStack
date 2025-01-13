class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjList = new Map();
    }

    // Add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Add an edge between two vertices
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v); // Undirected graph
    }

    // Check if the graph is Bipartite using BFS
    isBipartite() {
        const color = {}; // Store the color of each vertex (0 or 1)

        // Initialize all vertices as uncolored (-1)
        for (let v of this.adjList.keys()) {
            color[v] = -1;
        }

        // BFS to check bipartite for each connected component
        for (let startVertex of this.adjList.keys()) {
            if (color[startVertex] === -1) {
                // Start BFS
                const queue = [];
                color[startVertex] = 0; // Assign the first color
                queue.push(startVertex);

                while (queue.length > 0) {
                    const u = queue.shift();
                    const neighbors = this.adjList.get(u);

                    for (const v of neighbors) {
                        if (color[v] === -1) {
                            // Assign the opposite color to the neighbor
                            color[v] = 1 - color[u];
                            queue.push(v);
                        } else if (color[v] === color[u]) {
                            // If the neighbor has the same color, the graph is not bipartite
                            return false;
                        }
                    }
                }
            }
        }

        return true; // If no conflicts, the graph is bipartite
    }
}

// Example Usage
const g = new Graph(6);
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);

g.addEdge(0, 1);
g.addEdge(0, 3);
g.addEdge(1, 4);
g.addEdge(2, 5);

// Check if the graph is Bipartite
const result = g.isBipartite();
console.log("Is the graph bipartite?", result);
