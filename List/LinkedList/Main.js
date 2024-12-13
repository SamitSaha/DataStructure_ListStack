const readline = require('readline');
const LinkedList = require('./LinkedList'); // Import the LinkedList class

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const list = new LinkedList(); // Initialize a new linked list
// Helper function to get user input
function getInput(question) {
    return new Promise((resolve) => rl.question(question, resolve));
}
// Function to handle user selection of operations
async function menu() {
    while (true) {
        console.log('\nSelect an operation:');
        console.log('1. Insert a value');
        console.log('2. Print the linked list');
        console.log('3. Traverse the linked list');
        console.log('4. Count the number of elements');
        console.log('5. Search an item in the list (unsorted)');
        console.log('6. Search an item in the sorted list');
        console.log('7. Delete a node');
        console.log('8. Update a node');
        console.log('9. Exit');

        const choice = await getInput('Enter your choice: ');
        switch(choice){
            case '1':
                const value = await getInput('Enter value to insert: ');
                list.insert(value.trim()); // Trim whitespace from user input
                break;
            case '2':
                list.printList();
                break;
            case '3':
                list.traverse();
                break;
            case '4':
                list.count();
                break;
            case '5':
                const searchValue = await getInput('Enter value to search: ');
                list.search(searchValue.trim());
                break;
            case '6':
                const searchSortedValue = await getInput('Enter value to search in sorted list: ');
                list.searchSorted(searchSortedValue.trim());
                break;
            case '7':
                const deleteValue = await getInput('Enter value to delete: ');
                list.delete(deleteValue.trim());
                break;
            case '8':
                const oldValue = await getInput('Enter value to update: ');
                const newValue = await getInput('Enter new value: ');
                list.update(oldValue.trim(), newValue.trim());
                break;
            case '9':
                console.log('Exiting...');
                rl.close();
                return;
            default:
                console.log('Invalid choice! Try again.');
        }
    }
}
menu(); // Start the menu