// JavaScript implementation of Kruskal's algorithm

function makeSet(parent, rank, n) {
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
}

function findParent(parent, component) {
    if (parent[component] === component) {
        return component;
    }
    return parent[component] = findParent(parent, parent[component]);
}

function unionSet(u, v, parent, rank) {
    // Find the roots of the sets to which u and v belong
    u = findParent(parent, u);
    v = findParent(parent, v);

    // Union by rank
    if (rank[u] < rank[v]) {
        parent[u] = v;
    } else if (rank[u] > rank[v]) {
        parent[v] = u;
    } else {
        parent[v] = u;
        rank[u]++; // Increment rank if both sets have the same rank
    }
}

function kruskalAlgo(n, edges) {
    // Sort the edges in ascending order based on weight
    edges.sort((a, b) => a[2] - b[2]);

    let parent = new Array(n);
    let rank = new Array(n);

    // Initialize parent and rank arrays
    makeSet(parent, rank, n);

    let minCost = 0; // To store the minimum cost of the MST
    let mstEdges = []; // To store the edges in the MST

    console.log("Edges in the constructed MST:");

    for (let i = 0; i < edges.length; i++) {
        let v1 = findParent(parent, edges[i][0]);
        let v2 = findParent(parent, edges[i][1]);
        let wt = edges[i][2];

        // If v1 and v2 are in different sets, add the edge to the MST
        if (v1 !== v2) {
            unionSet(v1, v2, parent, rank);
            minCost += wt;
            mstEdges.push({ from: edges[i][0], to: edges[i][1], weight: wt });
        }
    }

    // Print the MST edges
    mstEdges.forEach(edge => {
        console.log(`${edge.from} -- ${edge.to} == ${edge.weight}`);
    });

    console.log("Minimum Cost of Spanning Tree:", minCost);
}

// Example usage
// Define the edges as [u, v, weight]
let edges = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];

// Number of vertices in the graph
let vertices = 4;

// Run Kruskal's algorithm
kruskalAlgo(vertices, edges);
