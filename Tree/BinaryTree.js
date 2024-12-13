const TreeNode = require("./TreeNode");

class BinaryTree{
    constructor(){
        this.root = null;
    }
    // function to insert value into tree. 
    insert(value, parentValue, direction){
        const newNode = new TreeNode(value);
        if(this.root === null){
            if(parentValue === null){
                this.root = newNode; // set root node. 
            } else{
                console.error("Tree is empty"); 
            }
        } else{
            const parent = this.findNode(this.root, parentValue);
            if(parent === null){
                console.log("Parent node value not found.");
            } else{
                if(direction === "left"){
                    parent.left = newNode;
                } else if(direction === "right"){
                    parent.right = newNode;
                } else{
                    console.error("direction must be left or right.")
                }
            }
        }
    }
    // Another function to help insert value into tree.
    findNode(node, value){
        if(node === null) 
            return null;
        if(node.value === value)
            return node;
        return this.findNode(node.left, value) || this.findNode(node.right, value);
    }

    // Preorder Traversal function
    preOrderTraverse(){
            // Preorder_Traverse(Tree, Root, Stack)
            // (1) Set Stack[0]=Null and Top=1 and Ptr=Root
            // (2) Repeat steps (3) to (5) until Ptr ≠ NULL
            // (3) Process Ptr->Info.
            // (4) if Ptr->Right ≠ NULL then set Stack[Top]=Ptr->Right and Top=Top+1
            // (5) If Ptr->Left ≠ NULL then set Ptr=Ptr->Left
            // else Set Ptr=Stack[Top] and Top=Top-1
            // (6) Exit.
        if(this.root === null){
            console.log("The Tree is empty.");
            return;
        }
        // step 1
        let stack = [];
        stack[0] = null;
        let top = 1;
        let ptr = this.root;
        // step 2
        while(ptr != null){
            console.log(ptr.value); // step 3
            // step 4
            if(ptr.right !== null){
                stack[top++] = ptr.right;
                // top++;
            }
            // step 5
            if(ptr.left !== null){
                ptr = ptr.left;
            } else {
                // top--;
                ptr = stack[--top];                
            }
        }
        // step 6 exit. 
    }

    inOrderTraverse() {
            // Inorder_Traverse(Tree, Root, Stack)
            // (1) Set Stack[0]=NULL and Top=1 and Ptr=Root
            // (2) Repeat while Ptr ≠ NULL

            // (a) Set Stack[Top]=Ptr and Top=Top+1
            // (b) Set PTR=Ptr->Left

            // (3) Set Ptr=Stack[Top] and Top := Top -1
            // (4) Repeat steps 5 to 7 while Ptr ≠ NULL
            // (5) Process Ptr->Info
            // (6) If Ptr->Right ≠NULL then set Ptr=Ptr->Right and go to step 2.
            // (7) Set Ptr=Stack[Top] and Top=Top-1
            // (8) Exit
        if (this.root === null) {
            console.log("The Tree is empty.");
            return;
        }
        // Step 1: Initialize stack, top, and pointer
        let stack = [];
        stack[0] = null;
        let top = 1;
        let ptr = this.root;
    
        // Step 2: Repeat while Ptr ≠ NULL
        while (ptr !== null || top > 1) {
            // Step 2a: Traverse left subtree, push nodes to stack
            while (ptr !== null) {
                stack[top] = ptr;
                top++;
                ptr = ptr.left;
            }
    
            // Step 3: Pop from stack, process node
            ptr = stack[--top];
            if (ptr !== null) {
                console.log(ptr.value); // Step 5: Process node's value
    
                // Step 6: Traverse right subtree
                if (ptr.right !== null) {
                    ptr = ptr.right;
                } else {
                    ptr = null; // Continue popping
                }
            }
        }
    }
    
    postOrderTraverse() {
        // Postorder Traversal Using Stack Algorithm:
        // Set Stack[0] = NULL and Top = 1 and Ptr = Root
        // Repeat steps (3) to (5) until Ptr ≠ NULL
        // Process Ptr->Info.
        // If Ptr->Right ≠ NULL, push Ptr->Right onto the stack.
        // If Ptr->Left ≠ NULL, push Ptr->Left onto the stack.
        // If the stack is empty, exit.
        if (this.root === null) {
            console.log("The Tree is empty.");
            return;
        }
    
        let stack1 = [];
        let stack2 = [];
        let ptr = this.root;
        stack1.push(ptr); // Push the root node onto stack1
    
        while (stack1.length > 0) {
            ptr = stack1.pop();
            stack2.push(ptr); // Push the current node onto stack2
    
            // Push left and right children onto stack1
            if (ptr.left !== null) {
                stack1.push(ptr.left);
            }
            if (ptr.right !== null) {
                stack1.push(ptr.right);
            }
        }
    
        // Print the nodes in postorder (stack2 has them in reverse order)
        while (stack2.length > 0) {
            ptr = stack2.pop();
            console.log(ptr.value);
        }
    }
        
}
module.exports = BinaryTree;