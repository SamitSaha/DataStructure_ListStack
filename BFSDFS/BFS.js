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
        this.adjList.get(w).push(v); // If undirected graph
    }

    // Perform BFS
    bfs(startVertex) {
        const color = {};
        const prev = {};
        const distance = {};
        const queue = [];

        // Initialize all vertices
        for (let i = 0; i < this.vertices; i++) {
            color[i] = "WHITE";
            prev[i] = null;
            distance[i] = Infinity;
        }

        // Start from the source vertex
        color[startVertex] = "GRAY";
        distance[startVertex] = 0;
        queue.push(startVertex);

        while (queue.length > 0) {
            const u = queue.shift();
            const neighbors = this.adjList.get(u);

            for (const v of neighbors) {
                if (color[v] === "WHITE") {
                    color[v] = "GRAY";
                    distance[v] = distance[u] + 1;
                    prev[v] = u;
                    queue.push(v);
                }
            }

            color[u] = "BLACK";
        }

        return { distance, prev };
    }

    // Print the shortest path from source to a given vertex
    printPath(prev, source, destination) {
        if (destination === source) {
            console.log(source);
        } else if (prev[destination] === null) {
            console.log("No path");
        } else {
            this.printPath(prev, source, prev[destination]);
            console.log(destination);
        }
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
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);

const { distance, prev } = g.bfs(0);
console.log("Distances:", distance);
console.log("Predecessors:", prev);

console.log("Path from 0 to 5:");
g.printPath(prev, 0, 5);
