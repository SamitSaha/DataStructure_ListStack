//Edge List: 
// A list of all edges, where each edge is represented as a pair 
// (or triplet for weighted graphs) of vertices.

// Here is not weight for nodes to nodes connections. 

// Function to add an edge to the graph
function addEdge(adj, u, v){
    // u - source, v - destination
    adj[u].push(v);
    adj[v].push(u); // Undirected graph
}

// BFS from given source s
function bfs(adj, s, visited){
    let q = [] // create a queue for BFS value store

    // Mark the source node as a visited and enqued it from queue
    visited[s] = true;
    q.push(s);

    // Iterate over the queue
    while(q.length > 0){
        let curr = q.shift() // Dequeue a vertix
        console.log(curr + ", ");

        // Get all adjacent vertices of curr
        for(let x of adj[curr]){
            if(!visited[x]){
                visited[x] = true; // mark as visited
                q.push(x);
            }
        }
    }
}

// Perform BFS for the entire graph
function bfsDisconnected(adj){
    let visited = Array(adj.length).fill(false) // Not Visited
    
    for(let i=0; i < adj.length; i++){
        if(!visited[i]){
            bfs(adj, i, visited);
        }
    }
}

// DFS from given source s (Recursive)
function dfs(adj, s, visited) {
    visited[s] = true;
    console.log(s + ", "); // Visit the node

    // Recur for all adjacent vertices of s
    for (let x of adj[s]) {
        if (!visited[x]) {
            dfs(adj, x, visited);
        }
    }
}

// Perform DFS for the entire graph
function dfsDisconnected(adj) {
    let visited = Array(adj.length).fill(false); // Not Visited

    for (let i = 0; i < adj.length; i++) {
        if (!visited[i]) {
            dfs(adj, i, visited);
        }
    }
}

// DFS Iterative from given source s
function dfsIterative(adj, s, visited) {
    let stack = []; // Use stack instead of recursion
    stack.push(s);

    while (stack.length > 0) {
        let curr = stack.pop();

        if (!visited[curr]) {
            visited[curr] = true;
            console.log(curr + ", "); // Visit the node

            // Add all unvisited neighbors to the stack
            for (let x of adj[curr]) {
                if (!visited[x]) {
                    stack.push(x);
                }
            }
        }
    }
}

// Perform DFS Iterative for the entire graph
function dfsIterativeDisconnected(adj) {
    let visited = Array(adj.length).fill(false); // Not Visited

    for (let i = 0; i < adj.length; i++) {
        if (!visited[i]) {
            dfsIterative(adj, i, visited);
        }
    }
}

let V = 6; // Number of vertices
let adj = Array.from({ length: V }, () => []); 

// Add edges to the graph
addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 3, 4);
addEdge(adj, 4, 5);

// Perform BFS traversal for the entire graph
console.log("\nBFS traversal:");
bfsDisconnected(adj);

console.log("\nDFS Recursive Traversal:");
dfsDisconnected(adj);

console.log("\nDFS Iterative Traversal:");
dfsIterativeDisconnected(adj);