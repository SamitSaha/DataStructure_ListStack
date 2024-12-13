// LinkedList.js
const Node = require('./Node'); // Import the Node class

class LinkedList {
    constructor() {
        this.head = null; // The head of the linked list, initialized to null
        this.size = 0; // The number of nodes in the list
    }

    // 1. Add a new node to the list
    // LinkedList.js
    insert(value) {
        if (value === undefined || value === null) {
            console.log('Invalid value. Please provide a valid input.');
            return;
        }
        const newNode = new Node(value); // Create a new node with the provided value

        if (this.head === null) {
            this.head = newNode; // If list is empty, the new node becomes the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next; // Traverse to the last node
            }
            current.next = newNode; // Add the new node at the end
        }

        this.size++; // Increment the size of the list
        console.log(`Inserted: ${value}`);
    }


    // 2. Print the linked list
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' -> ';
            current = current.next;
        }
        console.log(result ? result : 'List is empty'); // Print the list, trimming the last arrow
    }

    // 3. Traverse the linked list (same as printing here)
    traverse() {
        this.printList();
    }

    // 4. Count the number of elements in the linked list
    count() {
        console.log('Number of nodes:', this.size);
    }

    // 5. Search for an item in the linked list (unsorted)
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                console.log(`Item ${value} found.`);
                return;
            }
            current = current.next;
        }
        console.log(`Item ${value} not found.`);
    }

    // 6. Search for an item in a sorted linked list (optimized for sorted lists)
    searchSorted(value) {
        let current = this.head;
        while (current && current.value <= value) {
            if (current.value === value) {
                console.log(`Item ${value} found.`);
                return;
            }
            current = current.next;
        }
        console.log(`Item ${value} not found.`);
    }

    // 7. Delete a node from the linked list
    delete(value) {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next; // If the node to delete is the head, move the head
            this.size--;
            console.log(`Deleted ${value} from the list.`);
            return;
        }

        let current = this.head;
        let previous = null;
        while (current) {
            if (current.value === value) {
                previous.next = current.next; // Remove the node from the list
                this.size--;
                console.log(`Deleted ${value} from the list.`);
                return;
            }
            previous = current;
            current = current.next;
        }

        console.log(`Item ${value} not found.`);
    }

    // 8. Update an existing node's value
    update(oldValue, newValue) {
        let current = this.head;
        while (current) {
            if (current.value === oldValue) {
                current.value = newValue;
                console.log(`Updated node from ${oldValue} to ${newValue}.`);
                return;
            }
            current = current.next;
        }
        console.log(`Item ${oldValue} not found.`);
    }
}

module.exports = LinkedList;
