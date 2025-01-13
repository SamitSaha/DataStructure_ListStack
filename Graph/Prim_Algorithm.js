class Graph {
    constructor(vertices) {
        this.vertices = vertices; // Number of vertices
        this.adjList = new Map(); // Adjacency list to store edges and weights
    }

    // Add a vertex to the graph
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Add an edge to the graph with a weight
    addEdge(u, v, weight) {
        this.adjList.get(u).push({ vertex: v, weight });
        this.adjList.get(v).push({ vertex: u, weight }); // Undirected graph
    }

    // Prim's Algorithm to find MST
    primMST(startVertex) {
        const key = {}; // Minimum weight to reach a vertex
        const parent = {}; // Parent of each vertex in MST
        const includedInMST = {}; // Track vertices included in MST
        const pq = []; // Priority queue for vertices and their key values

        // Initialize all vertices
        for (let v of this.adjList.keys()) {
            key[v] = Infinity; // Infinite weight initially
            parent[v] = null; // No parent initially
            includedInMST[v] = false; // Not in MST initially
        }

        // Start with the startVertex
        key[startVertex] = 0;
        pq.push({ vertex: startVertex, key: 0 });

        let minCost = 0; // Track the minimum cost of MST
        const mstEdges = []; // Store the edges of MST

        while (pq.length > 0) {
            // Extract vertex with minimum key value
            pq.sort((a, b) => a.key - b.key); // Sort by key value
            const { vertex: u } = pq.shift();

            // Include u in MST
            includedInMST[u] = true;

            // If u has a parent, add the edge to the MST path
            if (parent[u] !== null) {
                mstEdges.push({ from: parent[u], to: u, weight: key[u] });
                minCost += key[u]; // Add weight of the edge to the total cost
            }

            // Relax edges
            for (let neighbor of this.adjList.get(u)) {
                const v = neighbor.vertex;
                const weight = neighbor.weight;

                // If v is not in MST and weight(u, v) is smaller than current key[v]
                if (!includedInMST[v] && weight < key[v]) {
                    key[v] = weight; // Update key
                    parent[v] = u; // Set parent
                    pq.push({ vertex: v, key: key[v] }); // Add to priority queue
                }
            }
        }

        // Print the MST
        console.log("Edge \tWeight");
        for (let edge of mstEdges) {
            console.log(`${edge.from} - ${edge.to} \t${edge.weight}`);
        }

        console.log("Minimum Cost of MST:", minCost);
    }
}

// Example Usage
const g = new Graph(5);

// Add vertices
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

// Add edges with weights
g.addEdge(0, 1, 2);
g.addEdge(0, 3, 6);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 8);
g.addEdge(1, 4, 5);
g.addEdge(2, 4, 7);
g.addEdge(3, 4, 9);

// Find MST starting from vertex 0
g.primMST(0);
